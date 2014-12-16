class PropsRepository
  delegate :find, to: :all

  def all
    Prop.includes(:users, :propser)
  end

  def add(attributes)
    user_ids = attributes.delete(:user_ids) || ''
    user_ids = clean_ids user_ids
    prop = Prop.new attributes
    add_prop_receivers prop, user_ids
    prop.save
    prop
  end

  def search(attributes)
    PropSearch.new attributes
  end

  private

  def clean_ids(ids_as_text)
    ids = ids_as_text.split(',')
    Array(ids).map(&:to_i) - [0]
  end

  def add_prop_receivers(prop, user_ids)
    user_ids.each do |user_id|
      prop.prop_receivers.build(user_id: user_id)
    end
  end
end
