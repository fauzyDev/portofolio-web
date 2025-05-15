// components/JsonViewer.tsx
'use client'

import JsonView from '@uiw/react-json-view';
import { monokaiTheme } from '@uiw/react-json-view/monokai';

type Props = {
  json: object
}

export default function JsonViewer({ json }: Props) {
  return (
    <JsonView 
      value={json} 
      collapsed={3} 
      displayObjectSize={false} 
      displayDataTypes={false}
      shortenTextAfterLength={35} 
      style={monokaiTheme} />
  )
}
