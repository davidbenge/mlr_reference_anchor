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
  const [documentPath, setDocumentPath] = useState('')
  let studyAdobeDCView

  const viewerConfig = {
    embedMode: "SIZED_CONTAINER",
    showAnnotationTools: true
  }
  
  const viewerInitConfig = {
      /* Pass your registered client id */
      clientId: props.pdfServiceClientId,
      /* Pass the div id in which PDF should be rendered */
      divId: "adobe-dc-view",
  }

  useEffect(() => {
    /* Initialize the AdobeDC View object */
    const viewSDKClient = new ViewSDKClient(viewerInitConfig);
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

  // invokes a the selected backend actions with input headers and params
  
}

PdfView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
  pdfServiceClientId: PropTypes.any
}

export default PdfView
