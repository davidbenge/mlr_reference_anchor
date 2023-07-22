/* 
* <license header>
*/

import React, { useEffect, useState } from 'react'
import ViewSDKClient from "../ViewSDKClient"
import PropTypes from 'prop-types'
import {
  Flex,
  Heading,
  Form,
  Picker,
  TextArea,
  ActionButton,
  StatusLight,
  ProgressCircle,
  Item,
  Text,
  View
} from '@adobe/react-spectrum'
import Function from '@spectrum-icons/workflow/Function'

import allActions from '../config.json'
import actionWebInvoke from '../utils'

const PdfView = (props) => {
  const [state, setState] = useState({})
  let studyAdobeDCView

  const viewerConfig = {
    embedMode: "SIZED_CONTAINER",
    showAnnotationTools: true
  }
  
  const viewerInitConfig = {
      /* Pass your registered client id */
      clientId: `${process.env.AIO_ims_contexts_Project__1689483174495K_client__id}`,
      /* Pass the div id in which PDF should be rendered */
      divId: "adobe-dc-view",
  }

  useEffect(() => {
    /* Initialize the AdobeDC View object */
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
        /* Invoke file preview */
        viewSDKClient.previewFile("adobe-dc-view", {
            /* Control the viewer customization. */
            showAnnotationTools: true,
            enableFormFilling: true
        });
        /* Register Save API handler */
        viewSDKClient.registerSaveApiHandler();
    });
  })

  return (
    <View width="grid-area: content" height="100vh">
      <Heading level={1}>Reference Anchor Builder</Heading>
      
      <div class="paper col;height: 100vh;" id="adobe-dc-view"></div>
    </View>
  )

  // Methods
  function previewPdf(url,fileName, viewerConfig){
    /* Invoke the file preview API on Adobe DC View object */
    studyAdobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
                url: "https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
                /*
                If the file URL requires some additional headers, then it can be passed as follows:-
                header: [
                    {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                    }
                ]
                */
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "Bodea Brochure.pdf"
        }
    }, viewerConfig);
}

  // invokes a the selected backend actions with input headers and params
  
}

PdfView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any
}

export default PdfView
