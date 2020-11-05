import React from 'react';
import {View, Text} from 'react-native';

export default class ErrorBoundary extends React.Component {
    state = { hasError: false }
  
    static getDerivedStateFromError (error) {
      return { hasError: true }
    }
  
    componentDidCatch (error, info) {
      logErrorToService(error, info.componentStack)
    }
  
    render () {
      return this.state.hasError
        ? 
        <View>
            <Text>Ha ocurrido un error.</Text>
            <Text>{this.state.hasError}</Text>
        </View>
        : this.props.children
    }
  }