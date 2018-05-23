let Registry = {
    registry: [],
    register: function(entity) {
        this.registry.push(entity);
    },

    entityFor: function(name) {
        for (let i = 0; i < this.registry.length; i++) {
            let entity = this.registry[i];

            if (entity.handles(name)) {
                return entity;
            }
        }
    }
}