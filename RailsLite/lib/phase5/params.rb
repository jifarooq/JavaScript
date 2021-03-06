require 'uri'

module Phase5
  class Params
    # use your initialize to merge params from
    # 1. query string
    # 2. post body
    # 3. route params
    #
    # You haven't done routing yet; but assume route params will be
    # passed in as a hash to `Params.new` as below:
    def initialize(req, route_params = {})
      @params = {}
      
      @params.merge!(route_params)
      @params.merge!(parse_www_encoded_form(req.body)) if req.body
      @params.merge!(parse_www_encoded_form(req.query_string)) if req.query_string
    end

    def [](key)
      @params[key.to_s]
    end

    def to_s
      @params.to_json.to_s
    end

    class AttributeNotFoundError < ArgumentError; end;

    private
    # this should return deeply nested hash
    # argument format
    # user[address][street]=main&user[address][zip]=89436
    # should return
    # { "user" => { "address" => { "street" => "main", "zip" => "89436" } } }
    def parse_www_encoded_form(www_encoded_form)
      params = {}
      key_vals = URI.decode_www_form(www_encoded_form)

      key_vals.each do |whole_key, val|
        current = params

        key_sequence = parse_key(whole_key)
        key_sequence.each_with_index do |key, i|
          if (i+1) == key_sequence.size
            current[key] = val
          else
            current[key] ||= {}
            current = current[key]
          end
        end
      end
 
      params
    end

    # this should return an array
    # user[address][street] should return ['user', 'address', 'street']
    def parse_key(key)
      pattern = /\]\[|\[|\]/
      key.split(pattern)
    end

  end
end
