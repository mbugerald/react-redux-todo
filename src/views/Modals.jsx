import React from 'react';

export default class Modal extends React.Component {
    render() {
        return(
            <div>
                <div className="modal_overlay">
                    <div className="modal">
                        <div className="modal_header">
                            <i className="fa fa-pencil-square-o"></i>
                            <span>Header</span>
                            <i className="fa fa-close close_modal"></i>
                        </div>
                        <div className="modal_body">Content</div>
                        <div className="modal_footer">Footer</div>
                    </div>
                </div>
            </div>
        )
    }
}