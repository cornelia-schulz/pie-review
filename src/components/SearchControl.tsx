// import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
// import { GeoSearchControl } from 'leaflet-geosearch'

// interface IProps
//   extends FieldRenderProps<Date, HTMLElement>,
//     FormFieldProps {}

const SearchControl = () => {
    const map = useMap()
  
    // useEffect(() => {
    //   const searchControl = new GeoSearchControl({
    //     provider: props.provider,
    //     ...props,
    //   })
  
    //   map.addControl(searchControl)
    //   return () => map.removeControl(searchControl)
    // }, [props, map])
  
    // return null
}

export default SearchControl