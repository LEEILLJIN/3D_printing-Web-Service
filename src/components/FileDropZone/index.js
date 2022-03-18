import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Modal from 'react-modal'
import PrintinfoCheckBox from '../PrintinfoCheckBox';

import { FileDropContainer,
        FileDropWrapper,
        FileDropInput,
        FileDropDecription1,
        FileDropDecription2,
        ModalContainer,
        CloseModalBtn,
        CloseModalBtnContainer
        
} from './FileDropZoneElements';


Modal.setAppElement('body');
const FileDropZone = (props) => {
    const [files, setFiles] = useState([]);

    const [borderColor, setBorderColor] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {
        getRootProps, 
        getInputProps,
        acceptedFiles,
        fileRejections

    } = useDropzone({
        accept : '.stl',
    });

    // const acceptedFileItems = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //       {file.path} - {file.size} bytes
    //     </li>
    //   ));
    
    //   const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //     <li key={file.path}>
    //       {file.path} - {file.size} bytes
    //       <ul>
    //         {errors.map(e => (
    //           <li key={e.code}>{e.message}</li>
    //         ))}
    //       </ul>
    //     </li>
    //   ));
    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        const parseSize = parseFloat((size / Math.pow(k, i)).toFixed(2));
        return parseSize + ' ' + sizes[i];
    }

    const CheckfileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        const parseSize = parseFloat((size / Math.pow(k, i)).toFixed(2));
        return parseSize;
    }

    const validateFile = (file) => {
       
        const filename = file.name;

        for(let i = filename.length; i>0; i--){

          if(filename.substring(i-1, i) === "."){
            if(filename.substring(i-1, filename.length) === ".stl"){
                return true;
            }
          }
        }

        return false;
    }
    const handleFiles = (files) => {
        var parseSize = 0;
       
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                console.log(files[i].size);
                parseSize = CheckfileSize(files[i].size);
               

                console.log(parseSize);
                if(parseSize<5){
                    setSelectedFiles(prevArray => [...prevArray, files[i]]);
                    openModal();

                }else{
                    alert("file 용량 체크")
                }
                
            } else {
                alert("STL 파일만 가능합니다.")
                // // add a new property called invalid
                // files[i]['invalid'] = true;
                // // add to the same array so we can display the name of the file
                // setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // // set error message
                // setErrorMessage('File type not permitted');

            }
        }
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle = "This is modal";
    function openModal() {
      setIsOpen(true);
    }
    const customStyles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        zIndex: 10,
      },
      content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#ffffe7",
        overflow: "auto",
        width : "600px",
        height : "400px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        WebkitOverflowScrolling: "touch",
        borderRadius: "14px",
        outline: "none",
        zIndex: 10,
      },
    };
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }



    const dragOver = (e) => {
        e.preventDefault();
        setBorderColor(true);
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
        setBorderColor(false);
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
        setBorderColor(false);

        if(files.length){
          handleFiles(files);
        }
       
    }

    //console.log(acceptedFiles);

    
  
    return (
      <FileDropContainer>
        <FileDropWrapper borderColor = {borderColor} {...getRootProps()}
            onDragOver = {dragOver}
            onDragEnter = {dragEnter}
            onDragLeave = {dragLeave}
            onDrop = {fileDrop}
        >
          <FileDropInput {...getInputProps()} />
          <FileDropDecription1>Only STL File</FileDropDecription1>
          <FileDropDecription2>Drag N drop some files here, or click to select files</FileDropDecription2>

        </FileDropWrapper>
        <div className="file-display-container">
            {
                selectedFiles.map((data, i) => 
                    <div className="file-status-bar" key={i}>
                        <div>
                            <div className="file-type-logo"></div>
                            <div className="file-type">{fileType(data.name)}</div>
                            <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                            <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                        </div>
                        <div className="file-remove">X</div>
                    </div>
                )
            }
        </div>
        <ModalContainer id="ok">
          <button onClick={openModal}>Open Modal</button>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          centered
        >
            
            <PrintinfoCheckBox/>
            <CloseModalBtnContainer>
            <CloseModalBtn onClick={closeModal}>close</CloseModalBtn>

            </CloseModalBtnContainer>
            <form>
              
            </form>
          </Modal>
        </ModalContainer>
        {/* <Filecheck>
            <h4>Accepted files</h4>
            <AcceptedFileItems>
                {acceptedFileItems}
            </AcceptedFileItems>
            <h4>Rejected files</h4>
            <FileRejectionItems>
                {fileRejectionItems}
            </FileRejectionItems>
        </Filecheck>
        <FileBtn>
            <FileBtnLink to= '/printsetting'>ok</FileBtnLink>
        </FileBtn> */}
      </FileDropContainer>
    );
}

export default FileDropZone