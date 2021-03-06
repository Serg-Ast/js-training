import MousePosition from '../mouse/position'

export default class AbstractViewport {
  constructor(fov = 30, distance = 400) {
    this.mouse = new MousePosition()
  }

  setSize(width, height) {
    this.left = width * this._left
    this.bottom = height * this._bottom
    this.width = width * this._width
    this.height = height * this._height
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    return this
  }

  updateCamera() {}
}
