var React = require('react');

module.exports = React.createClass({

  handleClick:function(){
    alert('Denna körs på klienten');
  },

  render: function(){
    return (
      <html>
      <head>
      <title>Pers isomorfiska app</title>
      <link rel='stylesheet' href="/style.css" />
      </head>
      <body>
        <article>
          <h1>Pers isomorfiska app!</h1>
          <p>
            Markup från server side.
            <button onClick={this.handleClick}>Klicka här</button>
          </p>
        </article>

        <script src="./bundle.js" />

      </body>
      </html>

    )
  }

});
