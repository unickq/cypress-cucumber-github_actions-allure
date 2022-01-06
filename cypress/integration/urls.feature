Feature: word.tips urls validation
    I want to open site sections

    Scenario Outline: Opening <title> page
        Given I open "<page>" page
        Then I see "<title>" in the title
        And I see "<title>" in the h1
        Examples:
            | page                   | title                |
            | /                      | Word Finder          |
            | scrabble-word-finder   | Scrabble Word Finder |
            | unscramble-word-finder | Word Unscrambler     |
            | anagram-solver         | Anagram Solver       |