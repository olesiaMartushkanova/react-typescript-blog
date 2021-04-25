import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 'You can contact me from here :)',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert(
      'Thank you! I will reply you in the next couple of days!' +
        this.state.value
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className='contactForm'>
        Contact Me
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default ContactForm;
