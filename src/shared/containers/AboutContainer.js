import React from 'react';
import { AnnounceableDocumentTitle } from 'react-announceable-document-title';

export default class About extends React.Component {
  render() {
    return (
      <AnnounceableDocumentTitle title="about">
        <div>
          Arrr, me matey
        </div>
      </AnnounceableDocumentTitle>
    );
  }
}
