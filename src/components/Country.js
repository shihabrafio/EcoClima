import React from 'react';

const Country = (props) => {
  const { name, value } = props;
  const parsedName = React.createElement('div', { dangerouslySetInnerHTML: { __html: name } });
  const style = { color: '#efefef' };
  return (
    <div className="modal">
      {parsedName}
      <div style={style}>
        {value}
      </div>
    </div>
  );
};

export default Country;
