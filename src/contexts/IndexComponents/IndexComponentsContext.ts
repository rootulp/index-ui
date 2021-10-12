import { createContext } from 'react'
import IndexComponent from 'components/IndexComponent'

interface IndexComponentsProps {
  dpiComponents?: IndexComponent[]
}

const IndexComponentsContext = createContext<IndexComponentsProps>({})

export default IndexComponentsContext
