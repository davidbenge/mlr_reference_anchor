/* 
* <license header>
*/

import React, { useEffect, useState } from 'react'
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
  View,
  ListView,
  ActionMenu
} from '@adobe/react-spectrum'
import Function from '@spectrum-icons/workflow/Function'

import allActions from '../config.json'
import actionWebInvoke from '../utils'

import File from '@spectrum-icons/illustrations/File'
import Folder from '@spectrum-icons/illustrations/Folder'

const PaperSelect = (props) => {
  const [state, setState] = useState({})
  const imsAuthProps = {
    imsClientId: 'aem-assets-frontend-1', 
    imsScope: "openid,read_organizations,additional_info.projectedProductContext",
    redirectUrl: window.location.href,
  }

  useEffect(() => {
    //registerAssetsSelectorsAuthService(imsAuthProps);
  })

  return (
    <View width="grid-area: content" height="100vh">
      <Heading level={1}>Reference Paper Selection</Heading>
      
      <ListView
        selectionMode="single"
        selectionStyle="highlight"
        aria-label="ListView with single selection"
      >
        <Item>Research paper 1</Item>
        <Item>Research paper 2</Item>
        <Item>Research paper 3</Item>
      </ListView>
    </View>
  )

  // Methods

  // invokes a the selected backend actions with input headers and params
  
}

PaperSelect.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any
}

export default PaperSelect
