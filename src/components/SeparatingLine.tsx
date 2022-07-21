import { Line } from '../styles/components/SeparatingLine'
import { SeparatingLineProps } from '../types/SeparatingLine'

export default function SeparatingLine({ light, thin }: SeparatingLineProps) {
  return (<Line light={light} thin={thin} data-testid="Line" />)
}