import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../../main.css';

// import * as Button from '../../components/Button/Button';
import Divider from '../../components/Divider/Divider';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
// import CategoryCard from '../../components/CategoryCard/CategoryCard';


export class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = { isMounted: false,
      buttonDisabled: true,
      buttonLabel: 'Disabled' };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  onClickButton = () => {
    const togl = !this.state.buttonDisabled;
    this.setState({ buttonDisabled: togl, buttonLabel: togl ? 'Disabled' : 'Not Disabled' });
  }
  onclickCard = () => {
    // eslint-disable-next-line no-alert
    alert('Card Clicked');
  }
  render() {
    const testActivity1 = {
      title: 'Help us teach our robot army of roombas to clean our school',
      image: 'http://0.0.0.0:8000/89b08c89c639d60004ac5be688af9b52.jpeg',
      commitment: 'Whole day',
    };
    const testActivity2 = {
      title: 'Programming robots with Scratch',
      image: 'http://0.0.0.0:8000/3636679227674278e01035596ff30aab.jpeg',
      commitment: '2 hour',
    };

    return (
      <div className={styles.container}>
        <h1>This is the landing page for Voluntari.ly</h1>
        <p>Big picture goes here</p>
        <Divider />
        <p>Call to action</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        <p>Paragraph with <em>emphasis</em> and <strong>strong</strong></p>
        <Divider />

        <h2>More Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        <p>Paragraph with <em>emphasis</em> and <strong>strong</strong></p>

        <h2>Code &amp; Quotations</h2>
        <p>This is some text with some inline <code>source code</code> and some keyboard <kbd>input</kbd>.</p>
        <pre>git clone http://voluntarily.github.com/vly1</pre>
        <blockquote cite="www.quotation.source">This is some text quoted from elsewhere.</blockquote>

        <h2>Some Things you can do</h2>
        <div className={styles.row}>

          <ActivityCard activity={testActivity1} onPress={this.onClickCard} />
          <ActivityCard activity={testActivity2} onPress={this.onClickCard} />
          <ActivityCard activity={testActivity1} onPress={this.onClickCard} />
          <ActivityCard activity={testActivity2} onPress={this.onClickCard} />
        </div>

        <h2>Browse Areas of Interest</h2>
        <p>Category Cards here</p>

      </div>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(Landing);
