import React , {Component} from 'react';

import Modal from '../../components/UI/modal/modal';
import Aux from '../auxiliary';

const withErrorHandler = (Wrapped , axios) => {
    return class extends Component {
        state = {
            err: null
        }
        constructor(props){
            super(props);
            this.reqInt = axios.interceptors.request.use(req => {
                this.setState({err: null});
                return req;
            });
            this.resInt = axios.interceptors.response.use(res => res, error => {
                this.setState({err: error});
            });

        }

        //remove interceptors here
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInt);
            axios.interceptors.response.eject(this.resInt);
        }
        errorHandler = () => {
            this.setState({err: null});
        }
        render(){
        return (
            <Aux>
                <Modal show={this.state.err} closeModal={this.errorHandler}>
                    {this.state.err ? this.state.err.message : null}
                </Modal>
                <Wrapped {...this.props}/>
            </Aux>
        );
        }
    };
}

export default withErrorHandler;