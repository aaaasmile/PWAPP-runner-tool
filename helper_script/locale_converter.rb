#file locale_converter.rb
require 'rubygems'
require 'json'

# mi funziona solo se il file messages.json è in formato iso-8859-1

class Converter
  def run(filename)
    #file = File.read(filename,:external_encoding => 'utf-8',
    #                          :internal_encoding => 'iso-8859-1')
    all_msgs = JSON.parse(File.read(filename,
        :external_encoding => 'utf-8'
    ))
    #p all_msgs["msg__tabella_tor"]
    #puts all_msgs["msg__tabella_tor"]["message"]
    #exit
    lines = []
    all_msgs.each do |k,v| 
      str = "\"#{k}\": \"#{v['message']}\""
      lines << str
    end
    lines.each{|l| puts l + ","}
  end
end


if $0 == __FILE__
  filename = 'D:\scratch\caterpillar\converted\pwapp_corsa-tool\app\_locales\it\messages.json'
  conv = Converter.new
  conv.run(filename)
end