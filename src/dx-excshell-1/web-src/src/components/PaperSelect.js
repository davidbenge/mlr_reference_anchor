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
  View
} from '@adobe/react-spectrum'
import Function from '@spectrum-icons/workflow/Function'

import allActions from '../config.json'
import actionWebInvoke from '../utils'

import File from '@spectrum-icons/illustrations/File';
import Folder from '@spectrum-icons/illustrations/Folder';
import {Item, ListView} from '@adobe/react-spectrum'

const PaperSelect = (props) => {
  const [state, setState] = useState({})

  useEffect(() => {
    
  })

  return (
    <View width="grid-area: content" height="100vh">
      <Heading level={1}>Reference Paper Selection</Heading>
      
      <ListView
        selectionMode="multiple"
        maxWidth="size-6000"
        aria-label="ListView example with complex items"
        onAction={(key) => alert(`Triggering action on item ${key}`)}
      >
        <Item key="1" textValue="Utilities" hasChildItems>
          <Folder />
          <Text>Utilities</Text>
          <Text slot="description">16 items</Text>
          <ActionMenu>
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionMenu>
        </Item>
        <Item key="2" textValue="Glasses Dog">
          <Image
            src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
            alt="Shiba Inu with glasses"
          />
          <Text>Glasses Dog</Text>
          <Text slot="description">JPG</Text>
          <ActionMenu>
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionMenu>
        </Item>
        <Item key="3" textValue="readme">
          <File />
          <Text>readme.txt</Text>
          <Text slot="description">TXT</Text>
          <ActionMenu>
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionMenu>
        </Item>
        <Item key="4" textValue="Onboarding">
          <File />
          <Text>Onboarding</Text>
          <Text slot="description">PDF</Text>
          <ActionMenu>
            <Item key="edit" textValue="Edit">
              <Edit />
              <Text>Edit</Text>
            </Item>
            <Item key="delete" textValue="Delete">
              <Delete />
              <Text>Delete</Text>
            </Item>
          </ActionMenu>
        </Item>
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
