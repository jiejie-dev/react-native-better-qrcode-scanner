/**
 * Created by marno on 2017/4/13
 * Function: 二维码扫描界面
 * Desc:
 */
import React from 'react'
import PropTypes from 'prop-types'
import Camera from 'react-native-camera'
import {
  StyleSheet,
  Platform,
  View,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native'
import QRScannerRectView from './QRScannerRectView'

const IS_ANDROID = Platform.OS === 'android'

export interface Props {
  color?: string
  maskColor?: string
  cornerColor?: string
  borderColor?: string
  rectHeight?: number
  rectWidth?: number
  borderWidth?: number
  cornerBorderWidth?: number
  cornerBorderLength?: number
  isLoading?: boolean
  cornerOffsetSize?: number
  isCornerOffset?: boolean
  bottomMenuHeight?: number
  scanBarAnimateTime?: number
  scanBarColor?: string
  scanBarImage?: ImageSourcePropType
  scanBarHeight?: number
  scanBarMargin?: number
  hintText?: string
  hintTextStyle?: StyleProp<TextStyle>
  hintTextPosition?: number
  isShowScanBar?: boolean

  onScanResultReceived?: any
  renderTopBarView?: any
  renderBottomMenuView?: any
  bottomMenuStyle?: StyleProp<ViewStyle>
}

export interface State {}

/**
 * 扫描界面
 */
export default class QRScannerView extends React.Component<Props, State> {
  static propTypes = {
    maskColor: PropTypes.string,
    borderColor: PropTypes.string,
    cornerColor: PropTypes.string,
    borderWidth: PropTypes.number,
    cornerBorderWidth: PropTypes.number,
    cornerBorderLength: PropTypes.number,
    rectHeight: PropTypes.number,
    rectWidth: PropTypes.number,
    isLoading: PropTypes.bool,
    isCornerOffset: PropTypes.bool, //边角是否偏移
    cornerOffsetSize: PropTypes.number,
    bottomMenuHeight: PropTypes.number,
    scanBarAnimateTime: PropTypes.number,
    scanBarColor: PropTypes.string,
    scanBarImage: PropTypes.any,
    scanBarHeight: PropTypes.number,
    scanBarMargin: PropTypes.number,
    hintText: PropTypes.string,
    hintTextStyle: PropTypes.object,
    hintTextPosition: PropTypes.number,
    renderTopBarView: PropTypes.func,
    renderBottomMenuView: PropTypes.func,
    isShowScanBar: PropTypes.bool,
    bottomMenuStyle: PropTypes.object,
    onScanResultReceived: PropTypes.func
  }

  constructor(props: Props) {
    super(props)
    //通过这句代码屏蔽 YellowBox
    console.disableYellowBox = true
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera onBarCodeRead={this.props.onScanResultReceived} style={{ flex: 1 }}>
          {/*绘制顶部标题栏组件*/}
          {IS_ANDROID ? this.props.renderTopBarView() : null}

          {/*绘制扫描遮罩*/}
          <QRScannerRectView
            maskColor={this.props.maskColor}
            cornerColor={this.props.cornerColor}
            borderColor={this.props.borderColor}
            rectHeight={this.props.rectHeight}
            rectWidth={this.props.rectWidth}
            borderWidth={this.props.borderWidth}
            cornerBorderWidth={this.props.cornerBorderWidth}
            cornerBorderLength={this.props.cornerBorderLength}
            isLoading={this.props.isLoading}
            cornerOffsetSize={this.props.cornerOffsetSize}
            isCornerOffset={this.props.isCornerOffset}
            bottomMenuHeight={this.props.bottomMenuHeight}
            scanBarAnimateTime={this.props.scanBarAnimateTime}
            scanBarColor={this.props.scanBarColor}
            scanBarHeight={this.props.scanBarHeight}
            scanBarMargin={this.props.scanBarMargin}
            hintText={this.props.hintText}
            hintTextStyle={this.props.hintTextStyle}
            scanBarImage={this.props.scanBarImage}
            hintTextPosition={this.props.hintTextPosition}
            isShowScanBar={this.props.isShowScanBar}
          />

          {/*绘制顶部标题栏组件*/}
          {!IS_ANDROID ? this.props.renderTopBarView() : null}

          {/*绘制底部操作栏*/}
          <View style={[styles.buttonsContainer, this.props.bottomMenuStyle]}>
            {this.props.renderBottomMenuView()}
          </View>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  viewfinder: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  topLeftCorner: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  topRightCorner: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  topMask: {
    position: 'absolute',
    top: 0
  },
  leftMask: {
    position: 'absolute',
    left: 0
  },
  rightMask: {
    position: 'absolute',
    right: 0
  },
  bottomMask: {
    position: 'absolute',
    bottom: 0
  }
})
