import React, { Component, ErrorInfo, ReactNode }  from 'react'
import { errorProps, errorState } from './../types'

export class GeneralError extends Component<errorProps, errorState> {
    constructor(props: errorProps) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: any): errorState {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.log(error)
        console.log(info)
    }

    render(): ReactNode {
        if(this.state.hasError) {
            return <this.props.fallbackUI title={this.props.title}/>
        }
        return this.props.children
    }
    
}