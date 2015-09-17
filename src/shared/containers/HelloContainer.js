import React from 'react';
import { PropTypes } from 'react';
import { AnnounceableDocumentTitle } from 'react-announceable-document-title';

const propTypes = {
  name: PropTypes.string,
};

export default class Hello extends React.Component {
  render() {
    return (
      <AnnounceableDocumentTitle title={`Hello ${this.props.params.name} - React App`}>
        <div>
          Hello, {this.props.params.name}!
        </div>
      </AnnounceableDocumentTitle>
    );
  }
}

Hello.propTypes = propTypes;
