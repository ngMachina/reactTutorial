var commentBox = React.createClass({
  render: function(){
    return (
      React.createElement('div', {className: 'commentBox'}, 'Comment Box Top Level lass Declaration')
    )
  }
});

React.render(React.createElement(commentBox, null), document.getElementById('content'));
