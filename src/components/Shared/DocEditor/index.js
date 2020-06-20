import React, {Component} from 'react';
import Editor from 'doc-editor';
import DragnDrop from '../DragnDrop';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import 'doc-editor/dist/quill.snow.css';
import './styles.scss';


// const puppeteer = require('puppeteer');

class DocEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {html: null};
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(content, delta, source, editor) {
        this.setState({html: editor.getHTML()});
    }

    render() {
        return <div>
            <Editor theme="snow" placeholder={this.props.placeholder} onChange={this.handleChange}/>
            {this.props.showDragnDrop ? <DragnDrop/> : null}
            {this.props.showPreview && this.state.html && renderHTML(this.state.html)}

        </div>;
    }
}

DocEditor.propTypes = {
    showPreview: PropTypes.bool,
    placeholder: PropTypes.string,
    showDragnDrop: PropTypes.bool
};

DocEditor.defaultProps = {
    showPreview: true
};

export default DocEditor;
