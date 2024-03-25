const skills = [
    { id: 125223, skill: 'HTML', comfy: true },
    { id: 127904, skill: 'CSS', comfy: true },
    { id: 139608, skill: 'JavaScript', comfy: false },
    { id: 902101, skill: 'Express', comfy: false },
    { id: 420696, skill: 'Node', comfy: false },
];


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.done = false;
    skills.push(skill);

}

function getOne(id) {
    id = parseInt(id);

    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}