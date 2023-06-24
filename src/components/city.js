import React from 'react';

const Detail = (props) => {
  const { name, value } = props;
  const parsedName = React.createElement('div', { dangerouslySetInnerHTML: { __html: name } });
  const style = { fontWeight: '900', color: '#efefef' };
  return (
    <div className="dts-single">
      {parsedName}
      <div style={style}>
        {value}
      </div>
    </div>
  );
};

export default Detail;
