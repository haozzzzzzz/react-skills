import React from 'react'
import { Upload, Icon, message, Button } from 'antd';

const { Dragger } = Upload;

export default class AntdComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            upload: {
                name: 'file',
                multiple: true,
                // action:Utils.api.uploadApi,
                action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                accept: '.txt',
                onChange: (info) => {
                    const { status } = info.file;
                    if (status !== 'uploading') {
                        console.log(info.file, info.fileList);
                    }
                    if (status === 'done') {
                        message.success(`${info.file.name} file uploaded successfully.`);
                    } else if (status === 'error') {
                        message.error(`${info.file.name} file upload failed.`);
                    }
                },
                customRequest: (files) => {
                    console.log('files:', files);
                    const file = files
                    this.setState({
                        file
                    })
                    this.upLoadVaild(file)
                }

            }
        }
    }
    // 上传验证  - 跟上传功能类似
    upLoadVaild = (file, tableName = null) => {
        const formData = new FormData()

        formData.append('file', file)
        formData.append('tableName', tableName)

        // Utils.axios.post(
        //     Utils.api.uploadApi,
        //     formData,
        //     // { 参数(可以省略) }
        // ).then((res) => {
        //     console.log(res);
        // })
    }

    // 模板下载
    uploadHandler = () => {
        console.log('模板下载');
        const csvDemoAddress = 'www.baidu.com'
        window.open(csvDemoAddress)
    }

    render() {

        const jsonReportId = 12345
        const jsonName = '组件json配置文件'

        return (
            <>
                <Dragger {...this.state.upload}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                </p>
                </Dragger>
                <div>
                    <Button type="primary" onClick={this.uploadHandler}>模板下载</Button>
                    <a
                        target="_blank"
                        href={`www.baidu.com/api?reportId=${jsonReportId}&name=${encodeURIComponent(jsonName)}`}
                    >
                        Json导出
                    </a>
                    <i className="iconfont iconwode">测试</i>
                </div>
            </>
        )
    }
}