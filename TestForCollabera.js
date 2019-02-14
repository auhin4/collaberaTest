import java.util.HashMap;
import java.util.Map;

public class TestForCollabera1 {

	public static void main(String[] args) {
		System.out.println(reverseString("abcd"));
		System.out.println(getMapOfWordCounts("Walmart Technology is reinventing the way the world shops and we’ve only just begun. Our " + 
			"team includes Walmart Labs in Silicon " + 
				"Valley and Bengaluru, which powers the eCommerce experience, as well as technology teams across data and analytics, retail, " + 
				"back office and more who " + 
				"help power store and digital experiences.").toString());
	}

	private static Map<String, Integer> getMapOfWordCounts(String string) {
		Map<String, Integer> mapWordCounts = new HashMap<String, Integer>();
		
		String[] words = string.split("[\\s\\.\\,\\!\\?]");
		
		for(int i = 0; i < words.length; i++) {
			if(mapWordCounts.containsKey(words[i].trim())) {
				Integer count = mapWordCounts.get(words[i].trim()) + 1;
				mapWordCounts.put(words[i].trim(), count);
			}else {
				mapWordCounts.put(words[i].trim(), 1);
			}
		}
		
		return mapWordCounts;
	}

	private static String reverseString(String string) {
		char[] flippedString = new char[string.length()];
		for(int i = 0; i < string.length(); i++) {
			flippedString[i] = (string.charAt(string.length() - 1 - i));
		}
		return String.copyValueOf(flippedString);
	}
	
	
}
