const SkillsCard = ({ icon: Icon, name, size }) => {

    return (
        <div className="skill-item">
            <Icon size={size} className="skill-icon" />
            <p className="skill-name">{name}</p>
        </div>
    )
}

export default SkillsCard;