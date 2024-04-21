class UserTrailSerializer < ActiveModel::Serializer
    attributes :username, :num_of_trails
  
    def num_of_trails
        self.object.trails.count
    end

end