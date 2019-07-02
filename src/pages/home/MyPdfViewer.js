import React from 'react';
import { Pagination, Spin } from 'antd';
import PDF from 'react-pdf-js';
import { withRouter } from 'react-router-dom';
import style from './pdfView.less'


class MyPdfViewer extends React.PureComponent {
    
  constructor(props) {
    super(props);
    this.state = {
      numPages: 5,
      pageNumber: 1,
      loading: true
    }
  }

  onDocumentComplete = (numPages) => {
    this.setState({
      numPages, 
      pageNumber: 1,
    });
    setTimeout(()=>{
      this.setState({
        loading: false
      });
    }, 5000)
  }

  render() {
    const { pageNumber, numPages, loading } = this.state;
    const fileName = this.props.location.state.fileName;
    return (
      <div id='PDFViewer' style={{textAlign: 'center'}}>
        <Spin tip="Loading..." size='large' spinning={loading} >
          <div className={style.pdfContainer}>
            
            <PDF
              file={fileName}
              onDocumentComplete={this.onDocumentComplete}
              page={pageNumber}
              className={style.pdfView}
              loading
            />
          
          </div>
          <Pagination defaultCurrent={pageNumber} total={numPages*10} onChange={this.onChange} >
            
          </Pagination>
          <div style={{float:'right', bottom: 30}}>第 {pageNumber} 页  共 {numPages} 页</div>
        </Spin>
      </div>
    );
  }

  onChange = (pageNumber) => {
    this.setState({
      pageNumber:pageNumber,
    })
  }

}

export default withRouter(MyPdfViewer);