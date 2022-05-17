import { useMapEvents } from 'react-leaflet';

interface IProps {
  setBounds: any
}

function BoundsTracker(props: IProps) {
  const map = useMapEvents({
    moveend(){
      console.log('moveend yo ', map.getBounds())
      props.setBounds(map.getBounds())
    }
  })
  return null;
}

export default BoundsTracker;