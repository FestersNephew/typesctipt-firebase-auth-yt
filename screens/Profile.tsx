import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Top from '../components/Top'
import Middle from '../components/Middle'
import Bottom from '../components/Bottom'

export default function Profile() {
  return (
    <View>
      <Top />
      <Middle />
      <Bottom />
    </View>
  )
}

const styles = StyleSheet.create({})