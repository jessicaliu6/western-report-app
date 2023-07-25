import axios from 'axios';

// To debug locally, use the following command to get your local IP, then put in service_url
// > ipconfig getifaddr en0
// const service_url = 'http://192.168.1.81:3001/'    // local test
const service_url = 'https://western-report-service-9u2f.onrender.com/'

/**
 * Query most recent two weeks reports from Western Report service, limit to 20 records
 * @param report a report object
 * @returns list of report objects
 */
const getReports = async () => {
    try {
        const url = service_url + 'reports';
        console.log(`Finding reports from Western Report service ... ${url}`);
        const response = await axios.get(url);

        // console.log('Western Report service response:', JSON.stringify(response, null, 2));
        // console.log(JSON.stringify(response.data.reports, null, 2));
        console.log(`Retrieved ${response.data.reports.length} reports from Western Report service.`)
        return response.data.reports;
    } catch (err) {
        console.error({err});
        // TODO: show error on HomeScreen
        return [];
    }
}

/**
 * Add a report to Western Report service
 * @param report a report object
 * @returns new report object with id
 */
const addReport = async (report) => {
    console.log('Adding report to Western Report service ...')
    console.log(report);
    try {
        response = await axios.post(service_url + 'report', report)

        console.log('Report Added to Western Report service.')
        console.log(response.data);

        return response.data;   // new report with id
    } catch (err) {
        console.error({err});
        throw 'Error occurred when adding report';
    }
}

/**
 * Upload photo to Western Report service. 
 * The id of the report will be used as key of form data, so that server side can use it to to retrieve 
 * associated report, to composite email and send out.
 * @param report a report object
 * @param photo ImagePicker result, have the following format:
 *      {"assets": [{"assetId": null, "base64": null, "duration": null, "exif": null, 
 *       "fileName": null, "fileSize": 5425077, "height": 3026, "type": "image",
 *       "uri": "file:///var/mobile/Containers/Data/Application/7828BA08-0CA3-4736-B039-E7474CA89C58/Library/Caches/ExponentExperienceData/%2540anonymous%252FWesternReport-ce2d0db5-2c87-4954-a20e-f0060501dd8c/ImagePicker/56BF83C9-416B-46A1-91E4-84C741517CF3.jpg", 
 *       "width": 3024}], "canceled": false, "cancelled": false}
 * @returns response of axios post
 */
const uploadPhoto = async (report, photo) => {
    console.log('Uploading photo ...')
    console.log(report)
    console.log(photo)
    try {
        const id = report.id.toString(); // report id will be used as key in form data
        const fileName = photo.fileName ? photo.fileName : photo.uri.substring(photo.uri.lastIndexOf('/') + 1);
        const formData = new FormData();
        formData.append(id, {
            name: fileName,
            type: photo.type,
            uri: Platform.OS === "android"
                    ? photo.uri
                    : photo.uri.replace("file://", "")
        })

        console.log({formData});

        response = await axios.post(service_url + 'upload', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            }
        });

        // console.log(response);
        console.log('Photo uploaded.')
        return response;
    } catch (err) {
        console.error({err});
        throw 'Error occurred when uploading photo.';
    }
}

export { addReport, getReports, uploadPhoto }