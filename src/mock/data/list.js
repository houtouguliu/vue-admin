import Mock from 'mockjs'
const data = Mock.mock({
    'list|10': [{
        'id': "1",
        "name": "@ctitle(2,10)",
        "status": 1,
        "accountUpload": 1,
        "creativeUpload": 0
    }],
});
export default {
    data
}