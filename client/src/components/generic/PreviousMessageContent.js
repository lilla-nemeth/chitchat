function PreviousMessageContent(props) {
  const { icon, author, message, onClick } = props;
  return (
    <div
      style={{
        padding: '1em 1.5em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div style={{ fontWeight: '600', fontSize: '0.9em' }}>{author}</div>
        <div style={{ fontWeight: '500', paddingTop: '1em' }}>{message}</div>
      </div>
      <div>
        <div style={{ width: '1.2em', cursor: 'pointer' }} onClick={onClick}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default PreviousMessageContent;
