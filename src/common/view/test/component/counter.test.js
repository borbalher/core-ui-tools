const
{ html }                      = require('htm/preact'),
{ expect }                    = require('chai'),
// { mount } = require('enzyme'),
{ render, fireEvent, screen } = require('@testing-library/preact'),
Counter                       = require('common/view/components/counter')

// describe('Counter', () => {
//   it('should display initial count', () => {
//     const wrapper = mount(html`<${Counter} initialCount=5/>`);
//     expect(wrapper.text()).to.include('Current value: 5');
//   });

//   it('should increment after "Increment" button is clicked', () => {
//     const wrapper = mount(html`<${Counter} initialCount=5/>`);

//     wrapper.find('button').simulate('click');

//     expect(wrapper.text()).to.include('Current value: 6');
//   });
// });

describe('Counter', () => {
  it('should display initial count', () => {
    const { container } = render(html`<${Counter} initialCount=5/>`);
    expect(container.textContent).toMatch('Current value: 5');
  });

  it('should increment after "Increment" button is clicked', async () => {
    render(html`<${Counter} initialCount=5/>`);

    fireEvent.click(screen.getByText('Increment'));
    await waitFor(() => {
      expect(screen.textContent).toMatch('Current value: 6');
    });
  });
});