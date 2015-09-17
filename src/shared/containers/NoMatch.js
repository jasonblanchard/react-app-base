import React from 'react';
import { AnnounceableDocumentTitle } from 'react-announceable-document-title';

export default class NoMatch extends React.Component {
  render() {
    return (
      <AnnounceableDocumentTitle title="Not Found">
        <div>
          404 :(
        </div>
      </AnnounceableDocumentTitle>
    );
  }
}
