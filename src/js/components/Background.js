import React from 'react'
import THREE from 'three'
import ImageUnderConstruction from '../lib/three-background/image-construction'
import imageUrl from '../../images/logo-small.png'

const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: -1
}
class Background extends React.Component {
  componentDidMount() {
    this.scene = new ImageUnderConstruction(imageUrl)
    this.scene.appendTo(this.element)
    this.resizeHandler = () => this.scene.resize()
    window.addEventListener('resize', this.resizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
    this.scene.destroy()
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return <div style={styles} ref={el => (this.element = el)} />
  }
}

export default Background