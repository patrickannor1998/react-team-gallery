function ProfileCard({ name, role, photoUrl, bio, github, expanded, onToggle }) {
  return (
    <article className={`profile-card ${expanded ? 'expanded' : ''}`}>
      <div className="profile-top">
        <img src={photoUrl} alt={name} className="avatar" />
        <div>
          <h2>{name}</h2>
          <p className="role">{role}</p>
        </div>
      </div>

      <button className="toggle-btn" onClick={onToggle}>
        {expanded ? 'Show less' : 'Show more'}
      </button>

      {expanded && (
        <div className="details">
          <p>{bio}</p>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      )}
    </article>
  );
}

export default ProfileCard;
