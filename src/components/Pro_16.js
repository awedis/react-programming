import React, { Component } from 'react';
import { Dialog, MultiDialog } from './Dialog';

class Pro_16 extends Component {
    state = {
        isOpen: false,
        isOpenMulti: false,
        multiContent: ''
    }

    openDialog(content) {
        this.setState({ isOpenMulti: true, multiContent: content });
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.setState({ isOpen: true})}>Open Dialog</button>

                <Dialog isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
                    Dialog 1
                </Dialog>

                <hr />

                <button onClick={() => this.openDialog('Dialog 1')}>Open Dialog 1</button>
                <button onClick={() => this.openDialog('Dialog 2')}>Open Dialog 2</button>
                <button onClick={() => this.openDialog('Dialog 3')}>Open Dialog 3</button>

                <MultiDialog isOpen={this.state.isOpenMulti} onClose={() => this.setState({ isOpenMulti: false })} dialogContent={this.state.multiContent} >
                </MultiDialog>

            </div>
        )
    }
}
export default Pro_16;
