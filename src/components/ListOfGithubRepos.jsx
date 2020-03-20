import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { holocronModule } from 'holocron';
import { fromJS } from 'immutable';

export const ListOfGithubRepos = () => {
    return (
      <div>

        </div>
    );
};

ListOfGithubRepos.propTypes = {

};



export default compose(
  holocronModule({
    name: 'list-of-github-repos',
  })
)(ListOfGithubRepos);
