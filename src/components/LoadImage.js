import React from 'react'
import PropTypes from 'prop-types'

// this component makes sure the flags from other countries do not stay
// visible while the new country flag is loading
class LoadImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageLoading: true
    }
    this.onImageLoad = this.onImageLoad.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ imageLoading: true })
    }
  }
  onImageLoad () {
    this.setState({ imageLoading: false })
  }
  render () {
    return (
      <img
        src={this.props.image}
        alt="Country's Flag"
        className={'responsive custom-image-size ' + (this.state.imageLoading && 'not-visible')}
        onLoad={this.onImageLoad}
      />
    )
  }
}

LoadImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default LoadImage
