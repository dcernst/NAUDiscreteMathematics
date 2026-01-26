var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "chap_acknowledgements",
  "level": "1",
  "url": "chap_acknowledgements.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  This book is intended to be used for a one-semester discrete mathematics course. There is always a debt to be paid in creating a text, and this one is no different. The initial source for this book was John W. Hagood's notes by the title MAT 226 Discrete Mathematics .  "
},
{
  "id": "root-1-2-4",
  "level": "1",
  "url": "root-1-2-4.html",
  "type": "Chapter",
  "number": "1",
  "title": "Sets and Counting Principles",
  "body": " Sets and Counting Principles  A set is a collection of objects called elements . Typically, braces are used to denote sets as in , which is the same set as , and the same as . If is a set and is an element of , we write . Otherwise, we write . For example, while . The set containing no elements is called the empty set , and is denoted by the symbol , but can also be written as . Any set that contains at least one element is referred to as a nonempty set . If we think of a set as a box potentially containing some stuff, then the empty set is a box with nothing in it.  The empty set and the set are examples of finite sets . Any set that is not finite is an infinite set . For example, the natural numbers defined by and integers defined by are both examples of infinite sets. Some books will include zero in the set of natural numbers, but we do not. Since the set of natural numbers consists of the positive integers, the natural numbers are sometimes denoted by . The real numbers , denoted by , is another example of an infinite set. If you look closely at our definitions for the natural numbers and integers you will notice that we wrote instead of . We use to mean that the symbol or expression on the left is defined to be equal to the expression on the right.  The language associated to sets is specific. We will often define sets using the following notation, called set-builder notation : , where is some predicate statement involving . The first part denotes what type of is being considered. The predicate to the right of the vertical bar determines the condition(s) that each must satisfy in order to be a member of the set. This notation is read as The set of all in such that .     The set describes the collection of even natural numbers that are greater than or equal to 8.      We can define the rational numbers using set-builder notation via .      Write the set of perfect squares using set-builder notation.      Translate the following set defined with set-builder notation in English and list a few of its elements: .    The cardinality of a set , denoted by , is the number of elements in . For example, if , then . We will mostly concern ourselves with the cardinality of finite sets in this book. Cardinality gets wildly more complicated if we consider infinite sets.  If and are sets, then we say that is a subset of , written , provided that every element of is an element of .    We have .      Let be a set. Determine whether each of the following statements is true or false. If a statement is true, explain why. If a statement is false, provide a specific counterexample.    .     .         Consider the set . How many subsets does have?     Transitivity of Subsets   Suppose that , , and are sets. If and , then .    Note that two sets and are equal , denoted , if the sets contain the same elements. It's clear that if and only if and . If , then is called a proper subset provided that . In this case, we may write or . Some authors use to mean , so some confusion could arise if you are not reading carefully.  Sometimes it is useful to fix a set to focus our attention on. The term universe of discourse (or domain of discourse ) generally refers to the collection of objects being discussed in a specific context.  Let and be sets in some universe of discourse . We define the following.   The union of and is .    The intersection of and is .    If and have the property that , then we say that and are disjoint .    The set difference (relative to ) of the sets and is .    The complement (relative to ) of is the set .       Suppose that the universe of discourse is . Let , , and . Find each of the following and then determine the cardinality of the set.                                                      Is any pair of the original sets , , and disjoint?    The next theorem should be clear.    If is a subset of some universe of discourse , then    ;     (i.e., and are disjoint).       The following principle is a natural notion.   Sum Principle for Disjoint Sets   If and are disjoint sets, then   More generally, if are pairwise disjoint sets, then       A domino is a rectangular tile, usually with a line dividing its face into two square ends, and each end is marked with a number of dots (also called pips) or is blank. Figure shows a few examples of dominoes. The first and second domino in the figure are actually the same domino since orientation of the domino is irrelevant! When tackling the problems below, consider handling disjoint cases. If you visualize the various cases, you may end up with a nice staircase-looking arrangement.   How many dominoes are there in a set that includes double blank through double nine?    How many dominoes are there in a set that includes double blank through double twelve?    How many dominoes are there in a set that includes double blank through double ?        Examples of dominoes.   From left to right, first domino has 4 pips and 2 pips, second domino has 2 pips and 4 pips, third domino has 5 pips and 5 pips, fourth domino has 3 pips and 0 pips.  From left to right, first domino has 4 pips and 2 pips, second domino has 2 pips and 4 pips, third domino has 5 pips and 5 pips, fourth domino has 3 pips and 0 pips.                                                          How many students are enrolled in MAT 136 or MAT 226 (or both) if there are 409 in MAT 136 and 156 in MAT 226? Do you need to know that 40 students are in both courses?    The previous problems gives us an indication of how to generalize the Sum Principle ( Theorem ) to the case when the sets are not disjoint.   General Sum Principle   If and are sets, then or equivalently       I'm in the mood for a cup of coffee! Let's say that the nearest place to get a cup of coffee is four blocks East and three blocks North. Assuming I only walk East or North, how many different routes can I take to get there if:   The last block I walk is heading North?    The last block I walk is heading East?    I don't care whether the last block I walk is North or East?       In Problem , we could describe paths to the coffee shop using expressions like , where we interpret the expression from left to right as instruction for which direction to walk at each step. Such expressions have a name. A string of objects of length  is a linearly ordered arrangements of objects. The objects in a string may be repeated unless specified otherwise. For example, is a string of length 7 consisting of 's and 's. If a string consists of letters, then it may be called a word (we do not require a word to be in the dictionary!). A bit string is a string consisting of 0's and 1's. Each occurrence of a 0 or 1 in a bit string is called a bit . The strings and are two different bit strings of length 3.    How many two-letter words are there using only the letters , , , ?    We can easily list these, but a different arrangement will illustrate a more powerful technique.                                                                    The rectangular table makes it clear that there are 16 two-letter words using the letters , , , and . Another way to see this is to note that there are 4 choices for the first (left-hand) letter and for each of these there are 4 choices for the right-hand letter, so there are words total.      How many numbered words are there consisting of two letters from , , , and , followed by one of the digits 1, 2, 3, 4, and 5?    A geometric display as in Example would seem to require three dimensions, but we can take what we already know and just add a digit to the right:     1  2  3  4  5                                                                    There are 16 rows (each with a word from Example ) and five columns, so there are two-letter words using , , , and , followed by a digit from 1, 2, 3, 4, and 5.    If and are sets, the Cartesian product of and , denoted (read as times or cross ), is the set of all ordered pairs where the first component is from and the second component is from . In set-builder notation, we have .  Similarly, the Cartesian product of sets sets is the collection of -tuples given by , where is referred to as the th factor of the Cartesian product. As a special case, the set is often abbreviated as .  Cartesian products are named after French philosopher and mathematician René Descartes (1596 1650).    If and , then .      The standard two-dimensional plane and standard three space are familiar examples of Cartesian products. In particular, we have and .      Consider the sets and from Example .   Find .    Find .         Let , , and . Find .      If is a set, then what is equal to?      If and are both finite sets, find a nice formula for .      Are collections of words or strings that we encountered earlier in the chapter just Cartesian products in disguise? Explain.      Is a set of dominoes a Cartesian product in disguise? Explain.    We have been dancing around a fundamental counting principle. Let's state it officially. There are three progressively more general versions, the first of which we already encountered in Problem . The second version officially follows from the first version by induction, which is a topic we will encounter later. The third version follows from the second by making a careful use of notation to identify the set with a Cartesian product.   Product Principle   Each of the following are referred to as the Product Principle .   If and are finite sets, then     If are finite sets, then     If is the set of outcomes for a -step process, where for , there are choices for step , no matter what earlier choices were made, then        The key difference between versions (b) and (c) of the Product Principle is that version (c) does not assume that the set of choices for step is independent of the previous choices.    A fashion-challenged freshman has three pair of pants, five shirts (all t-shirts, but different patterns) and a pair of sandals. How many different ensembles are available for this freshman?      Suppose you flip a coin fives times in a row, recording the sequence of heads and tails that you see. How many different sequences of flips are possible?      Suppose we roll a six-sided die and then flip a coin. How many distinct outcomes are possible?      How many bit strings of length are there? How many of these start and end with the bit 1?      How many subsets does a set with elements have? Make sure you are taking the case into account. You should be able to carefully justify your answer by cleverly utilizing the Product Principle.      How many four-letter words are there using lower-case English letter consonants (including ) that include exactly one occurrence of ?      A pass code consists of a string of two or three case-sensitive English letters followed by three digits (i.e., ). How many different possible pass codes are there?    So far we have encountered the following fundamental methods for determining the cardinality of a set:   Systematic brute-force (with good bookkeeping);     Sum Principle: If there are multiple disjoint cases, we can add up the sizes of the various cases. If you can phrase a problem with or , you should consider adding cases.     Product Principle: If all the elements\/outcomes can be constructed using a step-by-step process, you should multiply the number of ways each step in process can occur. Be on the look out for the keywords and or then .     The next result is simply a special case of Theorem . Sometimes it might be easier to count the opposite of what you are looking to count and then to subtract from the size of the universe of discourse. This idea is sometimes referred to as the Subtraction Principle . Keep this in mind as a method of attack for future problems.   Subtraction Principle   If is a subset of a universe of discourse , then , or equivalently, .      How many words of length 4 are there consisting of lower-case English letters that utilize at least two x's? Find the answer in two different ways.      How many words of length 6 are there consisting of lower-case English letters subject to the following constraints?   No constraints.    Repetition not allowed.    No instances of letter .    At least one occurrence of letter .         Six friends sit on one side of long rectangular table.   How many seating arrangements are there?    How many seating arrangements are there if Sally and Maria always sit next to each other?       The next principle, called the Division Principle , provides a method for ignoring unimportant differences when counting things. Loosely speaking, the general idea is count a larger set of distinct objects and then use the Division Principle to merge the ones that are not significantly different from each other. As a motivating example, suppose my kids have 30 toys scattered around the room. After asking my kids to pick up all the toys and put each toy in a bin according to what type of toy it is (e.g., Transformer), there ends up being 6 toys in each bin. In this case, it is easy to see that there must be 5 distinct bins.   Division Principle   If the finite set is the union of pairwise disjoint subsets each with elements, then . Equivalently, .      Six friends sit around a circle to play a game. Rotations of the group do not constitute different seating orders.   How many circular seating arrangements are there?    How many circular seating arrangements are there if Sally and Maria always sit next to each other?         How many ways can the letters of the word SLOPPY be arranged?      It's Halloween and five students arrive at my office begging for candy. I happen to have five pieces of candy. Depending on my mood, I may give away none of the candy, all of the candy, or any amount in between. Assuming I don't give any student more than one piece of candy, how many different ways can I distribute the candy? Does it matter if the pieces of candy are identical or not? If so, count both situations.    "
},
{
  "id": "root-1-2-4-2",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set elements empty set nonempty set "
},
{
  "id": "root-1-2-4-3",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite sets infinite set natural numbers integers real numbers "
},
{
  "id": "root-1-2-4-4",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set-builder notation "
},
{
  "id": "root-1-2-4-5",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-5",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": "  The set describes the collection of even natural numbers that are greater than or equal to 8.   "
},
{
  "id": "root-1-2-4-6",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-6",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": "  We can define the rational numbers using set-builder notation via .   "
},
{
  "id": "root-1-2-4-7",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-7",
  "type": "Problem",
  "number": "1.3",
  "title": "",
  "body": "  Write the set of perfect squares using set-builder notation.   "
},
{
  "id": "root-1-2-4-8",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-8",
  "type": "Problem",
  "number": "1.4",
  "title": "",
  "body": "  Translate the following set defined with set-builder notation in English and list a few of its elements: .   "
},
{
  "id": "root-1-2-4-9",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cardinality "
},
{
  "id": "root-1-2-4-10",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset "
},
{
  "id": "root-1-2-4-11",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-11",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": "  We have .   "
},
{
  "id": "root-1-2-4-12",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-12",
  "type": "Problem",
  "number": "1.6",
  "title": "",
  "body": "  Let be a set. Determine whether each of the following statements is true or false. If a statement is true, explain why. If a statement is false, provide a specific counterexample.    .     .      "
},
{
  "id": "root-1-2-4-13",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-13",
  "type": "Problem",
  "number": "1.7",
  "title": "",
  "body": "  Consider the set . How many subsets does have?   "
},
{
  "id": "root-1-2-4-14",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-14",
  "type": "Theorem",
  "number": "1.8",
  "title": "Transitivity of Subsets.",
  "body": " Transitivity of Subsets   Suppose that , , and are sets. If and , then .   "
},
{
  "id": "root-1-2-4-15",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal proper subset "
},
{
  "id": "root-1-2-4-16",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universe of discourse domain of discourse "
},
{
  "id": "root-1-2-4-17",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union intersection disjoint set difference complement "
},
{
  "id": "root-1-2-4-18",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-18",
  "type": "Problem",
  "number": "1.9",
  "title": "",
  "body": "  Suppose that the universe of discourse is . Let , , and . Find each of the following and then determine the cardinality of the set.                                                      Is any pair of the original sets , , and disjoint?   "
},
{
  "id": "thm_set_and_its_complement",
  "level": "2",
  "url": "root-1-2-4.html#thm_set_and_its_complement",
  "type": "Theorem",
  "number": "1.10",
  "title": "",
  "body": "  If is a subset of some universe of discourse , then    ;     (i.e., and are disjoint).      "
},
{
  "id": "thm_sum_principle",
  "level": "2",
  "url": "root-1-2-4.html#thm_sum_principle",
  "type": "Theorem",
  "number": "1.11",
  "title": "Sum Principle for Disjoint Sets.",
  "body": " Sum Principle for Disjoint Sets   If and are disjoint sets, then   More generally, if are pairwise disjoint sets, then    "
},
{
  "id": "prob_dominoes",
  "level": "2",
  "url": "root-1-2-4.html#prob_dominoes",
  "type": "Problem",
  "number": "1.12",
  "title": "",
  "body": "  A domino is a rectangular tile, usually with a line dividing its face into two square ends, and each end is marked with a number of dots (also called pips) or is blank. Figure shows a few examples of dominoes. The first and second domino in the figure are actually the same domino since orientation of the domino is irrelevant! When tackling the problems below, consider handling disjoint cases. If you visualize the various cases, you may end up with a nice staircase-looking arrangement.   How many dominoes are there in a set that includes double blank through double nine?    How many dominoes are there in a set that includes double blank through double twelve?    How many dominoes are there in a set that includes double blank through double ?      "
},
{
  "id": "fig_domino",
  "level": "2",
  "url": "root-1-2-4.html#fig_domino",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " Examples of dominoes.   From left to right, first domino has 4 pips and 2 pips, second domino has 2 pips and 4 pips, third domino has 5 pips and 5 pips, fourth domino has 3 pips and 0 pips.  From left to right, first domino has 4 pips and 2 pips, second domino has 2 pips and 4 pips, third domino has 5 pips and 5 pips, fourth domino has 3 pips and 0 pips.                                                       "
},
{
  "id": "root-1-2-4-25",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-25",
  "type": "Problem",
  "number": "1.13",
  "title": "",
  "body": "  How many students are enrolled in MAT 136 or MAT 226 (or both) if there are 409 in MAT 136 and 156 in MAT 226? Do you need to know that 40 students are in both courses?   "
},
{
  "id": "thm_General_Sum_Principle",
  "level": "2",
  "url": "root-1-2-4.html#thm_General_Sum_Principle",
  "type": "Theorem",
  "number": "1.14",
  "title": "General Sum Principle.",
  "body": " General Sum Principle   If and are sets, then or equivalently    "
},
{
  "id": "prob_coffee",
  "level": "2",
  "url": "root-1-2-4.html#prob_coffee",
  "type": "Problem",
  "number": "1.15",
  "title": "",
  "body": "  I'm in the mood for a cup of coffee! Let's say that the nearest place to get a cup of coffee is four blocks East and three blocks North. Assuming I only walk East or North, how many different routes can I take to get there if:   The last block I walk is heading North?    The last block I walk is heading East?    I don't care whether the last block I walk is North or East?      "
},
{
  "id": "root-1-2-4-29",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "string length word bit string bit "
},
{
  "id": "ex_counting_two_letter_words",
  "level": "2",
  "url": "root-1-2-4.html#ex_counting_two_letter_words",
  "type": "Example",
  "number": "1.16",
  "title": "",
  "body": "  How many two-letter words are there using only the letters , , , ?    We can easily list these, but a different arrangement will illustrate a more powerful technique.                                                                    The rectangular table makes it clear that there are 16 two-letter words using the letters , , , and . Another way to see this is to note that there are 4 choices for the first (left-hand) letter and for each of these there are 4 choices for the right-hand letter, so there are words total.   "
},
{
  "id": "root-1-2-4-31",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-31",
  "type": "Example",
  "number": "1.17",
  "title": "",
  "body": "  How many numbered words are there consisting of two letters from , , , and , followed by one of the digits 1, 2, 3, 4, and 5?    A geometric display as in Example would seem to require three dimensions, but we can take what we already know and just add a digit to the right:     1  2  3  4  5                                                                    There are 16 rows (each with a word from Example ) and five columns, so there are two-letter words using , , , and , followed by a digit from 1, 2, 3, 4, and 5.   "
},
{
  "id": "root-1-2-4-32",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian product ordered pairs "
},
{
  "id": "root-1-2-4-33",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-tuples factor "
},
{
  "id": "ex_CartesianProduct",
  "level": "2",
  "url": "root-1-2-4.html#ex_CartesianProduct",
  "type": "Example",
  "number": "1.18",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "root-1-2-4-36",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-36",
  "type": "Example",
  "number": "1.19",
  "title": "",
  "body": "  The standard two-dimensional plane and standard three space are familiar examples of Cartesian products. In particular, we have and .   "
},
{
  "id": "root-1-2-4-37",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-37",
  "type": "Problem",
  "number": "1.20",
  "title": "",
  "body": "  Consider the sets and from Example .   Find .    Find .      "
},
{
  "id": "root-1-2-4-38",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-38",
  "type": "Problem",
  "number": "1.21",
  "title": "",
  "body": "  Let , , and . Find .   "
},
{
  "id": "root-1-2-4-39",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-39",
  "type": "Problem",
  "number": "1.22",
  "title": "",
  "body": "  If is a set, then what is equal to?   "
},
{
  "id": "prob_cardinality_of_product",
  "level": "2",
  "url": "root-1-2-4.html#prob_cardinality_of_product",
  "type": "Problem",
  "number": "1.23",
  "title": "",
  "body": "  If and are both finite sets, find a nice formula for .   "
},
{
  "id": "root-1-2-4-41",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-41",
  "type": "Problem",
  "number": "1.24",
  "title": "",
  "body": "  Are collections of words or strings that we encountered earlier in the chapter just Cartesian products in disguise? Explain.   "
},
{
  "id": "root-1-2-4-42",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-42",
  "type": "Problem",
  "number": "1.25",
  "title": "",
  "body": "  Is a set of dominoes a Cartesian product in disguise? Explain.   "
},
{
  "id": "root-1-2-4-44",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-44",
  "type": "Theorem",
  "number": "1.26",
  "title": "Product Principle.",
  "body": " Product Principle   Each of the following are referred to as the Product Principle .   If and are finite sets, then     If are finite sets, then     If is the set of outcomes for a -step process, where for , there are choices for step , no matter what earlier choices were made, then       "
},
{
  "id": "root-1-2-4-46",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-46",
  "type": "Problem",
  "number": "1.27",
  "title": "",
  "body": "  A fashion-challenged freshman has three pair of pants, five shirts (all t-shirts, but different patterns) and a pair of sandals. How many different ensembles are available for this freshman?   "
},
{
  "id": "prob_coin_flips",
  "level": "2",
  "url": "root-1-2-4.html#prob_coin_flips",
  "type": "Problem",
  "number": "1.28",
  "title": "",
  "body": "  Suppose you flip a coin fives times in a row, recording the sequence of heads and tails that you see. How many different sequences of flips are possible?   "
},
{
  "id": "root-1-2-4-48",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-48",
  "type": "Problem",
  "number": "1.29",
  "title": "",
  "body": "  Suppose we roll a six-sided die and then flip a coin. How many distinct outcomes are possible?   "
},
{
  "id": "prob_bit_strings",
  "level": "2",
  "url": "root-1-2-4.html#prob_bit_strings",
  "type": "Problem",
  "number": "1.30",
  "title": "",
  "body": "  How many bit strings of length are there? How many of these start and end with the bit 1?   "
},
{
  "id": "prob_number_of_subsets",
  "level": "2",
  "url": "root-1-2-4.html#prob_number_of_subsets",
  "type": "Problem",
  "number": "1.31",
  "title": "",
  "body": "  How many subsets does a set with elements have? Make sure you are taking the case into account. You should be able to carefully justify your answer by cleverly utilizing the Product Principle.   "
},
{
  "id": "root-1-2-4-51",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-51",
  "type": "Problem",
  "number": "1.32",
  "title": "",
  "body": "  How many four-letter words are there using lower-case English letter consonants (including ) that include exactly one occurrence of ?   "
},
{
  "id": "root-1-2-4-52",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-52",
  "type": "Problem",
  "number": "1.33",
  "title": "",
  "body": "  A pass code consists of a string of two or three case-sensitive English letters followed by three digits (i.e., ). How many different possible pass codes are there?   "
},
{
  "id": "root-1-2-4-53",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-53",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "brute-force Sum Principle: Product Principle: "
},
{
  "id": "root-1-2-4-54",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Subtraction Principle "
},
{
  "id": "root-1-2-4-55",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-55",
  "type": "Theorem",
  "number": "1.34",
  "title": "Subtraction Principle.",
  "body": " Subtraction Principle   If is a subset of a universe of discourse , then , or equivalently, .   "
},
{
  "id": "root-1-2-4-56",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-56",
  "type": "Problem",
  "number": "1.35",
  "title": "",
  "body": "  How many words of length 4 are there consisting of lower-case English letters that utilize at least two x's? Find the answer in two different ways.   "
},
{
  "id": "root-1-2-4-57",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-57",
  "type": "Problem",
  "number": "1.36",
  "title": "",
  "body": "  How many words of length 6 are there consisting of lower-case English letters subject to the following constraints?   No constraints.    Repetition not allowed.    No instances of letter .    At least one occurrence of letter .      "
},
{
  "id": "root-1-2-4-58",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-58",
  "type": "Problem",
  "number": "1.37",
  "title": "",
  "body": "  Six friends sit on one side of long rectangular table.   How many seating arrangements are there?    How many seating arrangements are there if Sally and Maria always sit next to each other?      "
},
{
  "id": "root-1-2-4-59",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-59",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Division Principle "
},
{
  "id": "root-1-2-4-60",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-60",
  "type": "Theorem",
  "number": "1.38",
  "title": "Division Principle.",
  "body": " Division Principle   If the finite set is the union of pairwise disjoint subsets each with elements, then . Equivalently, .   "
},
{
  "id": "prop_circular_table",
  "level": "2",
  "url": "root-1-2-4.html#prop_circular_table",
  "type": "Problem",
  "number": "1.39",
  "title": "",
  "body": "  Six friends sit around a circle to play a game. Rotations of the group do not constitute different seating orders.   How many circular seating arrangements are there?    How many circular seating arrangements are there if Sally and Maria always sit next to each other?      "
},
{
  "id": "root-1-2-4-62",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-62",
  "type": "Problem",
  "number": "1.40",
  "title": "",
  "body": "  How many ways can the letters of the word SLOPPY be arranged?   "
},
{
  "id": "prob_candy",
  "level": "2",
  "url": "root-1-2-4.html#prob_candy",
  "type": "Problem",
  "number": "1.41",
  "title": "",
  "body": "  It's Halloween and five students arrive at my office begging for candy. I happen to have five pieces of candy. Depending on my mood, I may give away none of the candy, all of the candy, or any amount in between. Assuming I don't give any student more than one piece of candy, how many different ways can I distribute the candy? Does it matter if the pieces of candy are identical or not? If so, count both situations.   "
},
{
  "id": "root-1-2-5",
  "level": "1",
  "url": "root-1-2-5.html",
  "type": "Chapter",
  "number": "2",
  "title": "Functions",
  "body": " Functions  Let and be two nonempty sets. A function from to is a subset of such that for every , there exists a unique such that . The set is called the domain of and is denoted by . The set is called the codomain of and is denoted by while the subset of the codomain defined via is called the range of or the image of under .  There is a variety of notation and terminology associated to functions. We will write to indicate that is a function from to . We will make use of statements such as Let be the function defined via or Define via , where is understood to be a function in the second statement. Sometimes the word mapping (or map ) is used in place of the word function. If for a function , we often write and say that maps to or of equals . In this case, may be called an input of and is the preimage of under while is called an output of and is the image of under . Note that the domain of a function is the set of inputs while the range is the set of outputs for the function.  Sometimes we can represent functions visual representations called function (or mapping ) diagrams , where the elements of the domain and codomain are indicated by labeled nodes and ordered pairs for the function are indicated by an arrow pointing from the node for input to the node for the output. When drawing function diagrams, it is standard practice to put the elements for the domain on the left and the elements for the codomain on the right, so that all directed edges point from left to right. We may also draw an additional arrow labeled by the name of the function from the domain to the codomain.     Figure depicts a function for the sets to . In this case, we see that . Moreover, we can write things like and , and say things like maps to 4 and the image of is 1. Note that it is perfectly okay to have both and mapped to 4.       Function diagram for a function from to .      Sometimes we can define a function using a formula. For example, we can write to mean that each in the domain of maps to in the codomain. However, notice that providing only a formula is ambiguous! A function is determined by its domain, codomain, and the correspondence between these two sets. If we only provide a description for the correspondence, it is not clear what the domain and codomain are. Two functions that are defined by the same formula, but have different domains or codomains are not equal. It is important to point out that not every function can be described using a formula! Despite your prior experience, functions that can be represented succinctly using a formula are rare.    The function defined via is not equal to the function defined by since the two functions do not have the same domain.      Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs that represents the assignment, or write a formula as long as the domain and codomain are clear.   A function from a set with 4 elements to a set with 3 elements such that .    A function from a set with 4 elements to a set with 3 elements such that is strictly smaller than .         In high school you may have been told that a graph represents a function if it passes the vertical line test . Carefully state what the vertical line test says and then explain why it works.    A piecewise-defined function (or piecewise function ) is a function defined by specifying its output on a partition (i.e., disjoint chunks ) of the domain. Note that piecewise is a way of expressing the function, rather than a property of the function itself.    The function defined via is an example of a piecewise-defined function.      Define via . Express as a piecewise function.      Let . Count all functions . How is this problem related to Problem ? How is this problem related to Problem ?    Let be a function. We define the following.   The function is said to be injective (or one-to-one ) if for all , there is a unique such that . Said another way, is one-to-one provided implies that , or equivalently (in ) implies . That is, different inputs produce different outputs.    The function is said to be surjective (or onto ) if for all , there exists such that .    If is both injective and surjective, we say that is bijective .       Assume that and are finite sets. Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs, or write a formula as long as the domain and codomain are clear.   A function that is injective but not surjective.    A function that is surjective but not injective.    A function that is a bijection.    A function that is neither injective nor surjective.         Determine whether each of the following functions is injective, surjective, both, or neither.   Define via     Define via     Define via     Define via     Define via     Define via     Define via     Define via          Suppose and is a function. Fill in the blank with the appropriate word.  The function is         if and only if every horizontal line hits the graph of  at most once .  This statement is often called the horizontal line test . Explain why the horizontal line test is true. What kind of theorems to we get if we replace at most once with either at least once or exactly once ?      Suppose is a function for finite sets and . Explain why each of the following statements is true.   If is an injection, then .    If is a surjection, then .    If is a bijection, then .         Let and be nonempty finite sets with and .   How many different functions are there from to ?    If , how many injective functions are there from to ?    If , how many bijective functions are there from to ?    If , do you think it would be challenging to count the number of surjective functions from to ?       The next theorem states an important counting technique, which we refer to as the Bijection Principle .   Bijection Principle   If and there exists a bijection between and , then , as well.      Let denote the set of ways to distribute candy in Problem (in the situation where the candy is all identical) and let denote the set of sequence of coin flips in Problem . Find a bijection .      Utilize a bijection to connect Problems and .    The next problem illustrates that some care must be taken when attempting to define a function.    For each of the following, explain why the given description does not define a function.   Define via .    Define via .    Let and . Define via     Define via .       In mathematics, we say that an expression is well defined (or unambiguous ) if its definition yields a unique interpretation. Otherwise, we say that the expression is not well defined (or is ambiguous ). For example, if , then the expression is well defined since it does not matter if we interpret this as or since the real numbers are associative under multiplication.  When we attempt to define a function, it may not be clear without doing some work that our definition really does yield a function. If there is some potential ambiguity in the definition of a function that ends up not causing any issues, we say that the function is well defined. However, this phrase is a bit of misnomer since all functions are well defined. The issue of whether a description for a proposed function is well defined often arises when defining things in terms of how an element of the domain is written. For example, the descriptions given in Parts (c) and (d) of Problem are not well defined.  "
},
{
  "id": "root-1-2-5-2",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function from to domain codomain range image of "
},
{
  "id": "root-1-2-5-3",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mapping map input preimage output image "
},
{
  "id": "root-1-2-5-4",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function mapping diagrams "
},
{
  "id": "ex_function",
  "level": "2",
  "url": "root-1-2-5.html#ex_function",
  "type": "Example",
  "number": "2.1",
  "title": "",
  "body": "   Figure depicts a function for the sets to . In this case, we see that . Moreover, we can write things like and , and say things like maps to 4 and the image of is 1. Note that it is perfectly okay to have both and mapped to 4.   "
},
{
  "id": "fig_function_diagram",
  "level": "2",
  "url": "root-1-2-5.html#fig_function_diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " Function diagram for a function from to .     "
},
{
  "id": "root-1-2-5-9",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-9",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": "  The function defined via is not equal to the function defined by since the two functions do not have the same domain.   "
},
{
  "id": "root-1-2-5-10",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-10",
  "type": "Problem",
  "number": "2.3",
  "title": "",
  "body": "  Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs that represents the assignment, or write a formula as long as the domain and codomain are clear.   A function from a set with 4 elements to a set with 3 elements such that .    A function from a set with 4 elements to a set with 3 elements such that is strictly smaller than .      "
},
{
  "id": "root-1-2-5-11",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-11",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  In high school you may have been told that a graph represents a function if it passes the vertical line test . Carefully state what the vertical line test says and then explain why it works.   "
},
{
  "id": "root-1-2-5-12",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "piecewise-defined function piecewise function "
},
{
  "id": "root-1-2-5-13",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-13",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": "  The function defined via is an example of a piecewise-defined function.   "
},
{
  "id": "root-1-2-5-14",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-14",
  "type": "Problem",
  "number": "2.6",
  "title": "",
  "body": "  Define via . Express as a piecewise function.   "
},
{
  "id": "prob_binary_output_function",
  "level": "2",
  "url": "root-1-2-5.html#prob_binary_output_function",
  "type": "Problem",
  "number": "2.7",
  "title": "",
  "body": "  Let . Count all functions . How is this problem related to Problem ? How is this problem related to Problem ?   "
},
{
  "id": "root-1-2-5-16",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "injective one-to-one surjective onto bijective "
},
{
  "id": "root-1-2-5-17",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-17",
  "type": "Problem",
  "number": "2.8",
  "title": "",
  "body": "  Assume that and are finite sets. Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs, or write a formula as long as the domain and codomain are clear.   A function that is injective but not surjective.    A function that is surjective but not injective.    A function that is a bijection.    A function that is neither injective nor surjective.      "
},
{
  "id": "prob_injective_surjective_functions",
  "level": "2",
  "url": "root-1-2-5.html#prob_injective_surjective_functions",
  "type": "Problem",
  "number": "2.9",
  "title": "",
  "body": "  Determine whether each of the following functions is injective, surjective, both, or neither.   Define via     Define via     Define via     Define via     Define via     Define via     Define via     Define via       "
},
{
  "id": "root-1-2-5-19",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-19",
  "type": "Problem",
  "number": "2.10",
  "title": "",
  "body": "  Suppose and is a function. Fill in the blank with the appropriate word.  The function is         if and only if every horizontal line hits the graph of  at most once .  This statement is often called the horizontal line test . Explain why the horizontal line test is true. What kind of theorems to we get if we replace at most once with either at least once or exactly once ?   "
},
{
  "id": "prob_injective_surjective_cardinality",
  "level": "2",
  "url": "root-1-2-5.html#prob_injective_surjective_cardinality",
  "type": "Problem",
  "number": "2.11",
  "title": "",
  "body": "  Suppose is a function for finite sets and . Explain why each of the following statements is true.   If is an injection, then .    If is a surjection, then .    If is a bijection, then .      "
},
{
  "id": "root-1-2-5-21",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-21",
  "type": "Problem",
  "number": "2.12",
  "title": "",
  "body": "  Let and be nonempty finite sets with and .   How many different functions are there from to ?    If , how many injective functions are there from to ?    If , how many bijective functions are there from to ?    If , do you think it would be challenging to count the number of surjective functions from to ?      "
},
{
  "id": "root-1-2-5-22",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bijection Principle "
},
{
  "id": "root-1-2-5-23",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-23",
  "type": "Theorem",
  "number": "2.13",
  "title": "Bijection Principle.",
  "body": " Bijection Principle   If and there exists a bijection between and , then , as well.   "
},
{
  "id": "root-1-2-5-24",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-24",
  "type": "Problem",
  "number": "2.14",
  "title": "",
  "body": "  Let denote the set of ways to distribute candy in Problem (in the situation where the candy is all identical) and let denote the set of sequence of coin flips in Problem . Find a bijection .   "
},
{
  "id": "root-1-2-5-25",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-25",
  "type": "Problem",
  "number": "2.15",
  "title": "",
  "body": "  Utilize a bijection to connect Problems and .   "
},
{
  "id": "prob_not_well_defined",
  "level": "2",
  "url": "root-1-2-5.html#prob_not_well_defined",
  "type": "Problem",
  "number": "2.16",
  "title": "",
  "body": "  For each of the following, explain why the given description does not define a function.   Define via .    Define via .    Let and . Define via     Define via .      "
},
{
  "id": "root-1-2-5-28",
  "level": "2",
  "url": "root-1-2-5.html#root-1-2-5-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well defined unambiguous ambiguous "
},
{
  "id": "root-1-2-6",
  "level": "1",
  "url": "root-1-2-6.html",
  "type": "Chapter",
  "number": "3",
  "title": "Permutations",
  "body": " Permutations  For , we define . That is, is just clever shorthand for the set containing 1 through . This notation is meant to resemble interval notation.  For and a nonempty set , a -permutation of is an injective function . The set of all -permutations of is denoted by . If happens to be the set , we use the notation . And if , we write and refer to each -permutation in as a permutation . Let . By convention, we set , including the case when .    Complete the following.   Write down all of the elements in . What is ?    Write down all of the elements in . What is ?       The game of chess is played on an grid. We will consider chessboards with arbitrary dimensions, say ( rows, columns) with . A rook is a castle-shaped piece that can move horizontally or vertically any number of squares. In a typical chess game, there are two black rooks and two white rooks, but for our purposes we will assume we have rooks, where all the rooks are the same color. We say that an arrangement of rooks on an chessboard is non-attacking if no two rooks lie in the same row or column. Figure shows one possible non-attacking rook arrangement on an chessboard.   A non-attacking rook arrangement on a chessboard. Four rooks are placed such that no two occupy the same row or column.   A non-attacking rook arrangement on a chessboard. Four rooks are placed such that no two occupy the same row or column.     centers=((.5,2.5),(1.5,5.5),(2.5,.5),(3.5,4.5))             Consider the collection of -permutations in with . Explain why is equal to the number of non-attacking rook arrangements on an chess board. Hint: Establish a bijection between the collection of non-attacking rook arrangements on an chess board and the collection of -permutations.    Recall that for , the factorial of is defined , and we define for convenience.    For , we have     Note that as a special case of the formula above, we have and we obtain   We can think of a -permutation as a linearly-ordered arrangement (i.e., string) of of objects. That is, we can denote a -permutation as a string , where each and for . For example, if and , then the string represents the -permutation given by .  Do you see why this -permutation corresponds to the non-attacking rook arrangement in Figure ?  In the case when , we can denote a permutation as a string , where each entry appears once. For example, the string represents the bijection given by .    How many strings of length three are there using letters from if the letters in the string are not repeated?      There are 8 finalists at the Olympic Games 100 meters sprint. Assume there are no ties.   How many ways are there for the runners to finish?    How many ways are there for the runners to get gold, silver, bronze?    How many ways are there for the runners to get gold, silver, bronze given that Usain Bolt is sure to get the gold medal?         If , prove that , both using the formula in Theorem , and separately using the definition of -permutations together with Product and Sum Principles. The latter approach is an example of a combinatorial proof .    The formula in the previous problem is an example of a recurrence relation , which will be a topic of focus in a later chapter.  Interpreting a permutation as a linearly ordered arrangement of objects (i.e., string), a circular permutation is similar to a permutation except the objects are arranged on a circle, so that there is no beginning or end. An example of a circular permutation of length 8 is given in Figure . Any circular rotation yields the same circular permutation. However, for , reversing the relative order of the elements (i.e., encountering the same numbers counterclockwise instead of clockwise) yields a different circular permutation. Do you see why we included the restriction on in the previous sentence?   Example of a circular permutation for .   Example of a circular permutation for . Reading the numbers clockwise, we encounter 1, 4, 5, 2, 8, 7, 3, 6.    alignments=['e','ne','n','nw','w','sw','s','se']  labels=['3','6','1','4','5','2','8','7']  f(t)=(cos(pi*t\/4),sin(pi*t\/4))      ${labels[k]}         We encountered circular permutations back in Problem when we counted circular seating arrangements of six friends sitting around a circle to play a game. Recall that the trick in that problem was to make use of the Division Principle.    How many circular permutations are there of length ?    Moving away from circular permutations and back to -permutations, recall that we can represent each -permutation of as a string of length , where each entry is from and no repeats are allowed. What if we allow repeats?    How many ways can the letters of the word PRESCOTT be arranged?      How many ways can the letters of the word POPPY be arranged? Try to solve this problem in two different ways.    Consider a set of objects that are not necessarily distinct, with different types objects and objects of type (for ), so that . An ordered arrangement of these objects is called a generalized permutation and the number of such arrangements is denoted by . For example, the number of words we can make out of the letters of POPPY is . The following theorem follows immediately from the Division Principle.    For such that , we have       How many ways can the letters of the word MISSISSIPPI be arranged?      In Professor X's class of 9 graduate students she will give two A's, one B, and six C's. How many possible ways are there to do this?      Let's revisit Problem , which involved my walk to get coffee. When we attacked that problem, we did a lot of brute force. Do we now have an easier method?      In how many ways can a deck of 52 cards be dealt to four players, say , , , and ?    "
},
{
  "id": "root-1-2-6-3",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-permutation permutation "
},
{
  "id": "root-1-2-6-4",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-4",
  "type": "Problem",
  "number": "3.1",
  "title": "",
  "body": "  Complete the following.   Write down all of the elements in . What is ?    Write down all of the elements in . What is ?      "
},
{
  "id": "root-1-2-6-5",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-attacking "
},
{
  "id": "fig_nonattack",
  "level": "2",
  "url": "root-1-2-6.html#fig_nonattack",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " A non-attacking rook arrangement on a chessboard. Four rooks are placed such that no two occupy the same row or column.   A non-attacking rook arrangement on a chessboard. Four rooks are placed such that no two occupy the same row or column.     centers=((.5,2.5),(1.5,5.5),(2.5,.5),(3.5,4.5))          "
},
{
  "id": "root-1-2-6-7",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-7",
  "type": "Problem",
  "number": "3.2",
  "title": "",
  "body": "  Consider the collection of -permutations in with . Explain why is equal to the number of non-attacking rook arrangements on an chess board. Hint: Establish a bijection between the collection of non-attacking rook arrangements on an chess board and the collection of -permutations.   "
},
{
  "id": "root-1-2-6-8",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial "
},
{
  "id": "thm_permutations_formula",
  "level": "2",
  "url": "root-1-2-6.html#thm_permutations_formula",
  "type": "Theorem",
  "number": "3.3",
  "title": "",
  "body": "  For , we have    "
},
{
  "id": "root-1-2-6-14",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-14",
  "type": "Problem",
  "number": "3.4",
  "title": "",
  "body": "  How many strings of length three are there using letters from if the letters in the string are not repeated?   "
},
{
  "id": "root-1-2-6-15",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-15",
  "type": "Problem",
  "number": "3.5",
  "title": "",
  "body": "  There are 8 finalists at the Olympic Games 100 meters sprint. Assume there are no ties.   How many ways are there for the runners to finish?    How many ways are there for the runners to get gold, silver, bronze?    How many ways are there for the runners to get gold, silver, bronze given that Usain Bolt is sure to get the gold medal?      "
},
{
  "id": "root-1-2-6-16",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-16",
  "type": "Problem",
  "number": "3.6",
  "title": "",
  "body": "  If , prove that , both using the formula in Theorem , and separately using the definition of -permutations together with Product and Sum Principles. The latter approach is an example of a combinatorial proof .   "
},
{
  "id": "root-1-2-6-17",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recurrence relation "
},
{
  "id": "root-1-2-6-18",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circular permutation "
},
{
  "id": "fig_circular_permutation",
  "level": "2",
  "url": "root-1-2-6.html#fig_circular_permutation",
  "type": "Figure",
  "number": "3.2",
  "title": "",
  "body": " Example of a circular permutation for .   Example of a circular permutation for . Reading the numbers clockwise, we encounter 1, 4, 5, 2, 8, 7, 3, 6.    alignments=['e','ne','n','nw','w','sw','s','se']  labels=['3','6','1','4','5','2','8','7']  f(t)=(cos(pi*t\/4),sin(pi*t\/4))      ${labels[k]}        "
},
{
  "id": "root-1-2-6-21",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-21",
  "type": "Problem",
  "number": "3.7",
  "title": "",
  "body": "  How many circular permutations are there of length ?   "
},
{
  "id": "root-1-2-6-23",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-23",
  "type": "Problem",
  "number": "3.8",
  "title": "",
  "body": "  How many ways can the letters of the word PRESCOTT be arranged?   "
},
{
  "id": "root-1-2-6-24",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-24",
  "type": "Problem",
  "number": "3.9",
  "title": "",
  "body": "  How many ways can the letters of the word POPPY be arranged? Try to solve this problem in two different ways.   "
},
{
  "id": "root-1-2-6-25",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized permutation "
},
{
  "id": "root-1-2-6-26",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-26",
  "type": "Theorem",
  "number": "3.10",
  "title": "",
  "body": "  For such that , we have    "
},
{
  "id": "root-1-2-6-27",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-27",
  "type": "Problem",
  "number": "3.11",
  "title": "",
  "body": "  How many ways can the letters of the word MISSISSIPPI be arranged?   "
},
{
  "id": "root-1-2-6-28",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-28",
  "type": "Problem",
  "number": "3.12",
  "title": "",
  "body": "  In Professor X's class of 9 graduate students she will give two A's, one B, and six C's. How many possible ways are there to do this?   "
},
{
  "id": "root-1-2-6-29",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-29",
  "type": "Problem",
  "number": "3.13",
  "title": "",
  "body": "  Let's revisit Problem , which involved my walk to get coffee. When we attacked that problem, we did a lot of brute force. Do we now have an easier method?   "
},
{
  "id": "root-1-2-6-30",
  "level": "2",
  "url": "root-1-2-6.html#root-1-2-6-30",
  "type": "Problem",
  "number": "3.14",
  "title": "",
  "body": "  In how many ways can a deck of 52 cards be dealt to four players, say , , , and ?   "
},
{
  "id": "root-1-2-7",
  "level": "1",
  "url": "root-1-2-7.html",
  "type": "Chapter",
  "number": "4",
  "title": "Combinations",
  "body": " Combinations  The notion of -permutations captures arrangements of distinct objects where order matters. But what should we do if we want to capture a situation where the order of the objects does not matter? Since the order of the objects in a set does not matter, this is the model we should use.  If is a set and with , we refer to as a -subset of . The collection of all -subsets of is defined via   The binomial coefficient is defined via   In particular, if , then . We read as choose . Alternate notations for binomial coefficients include and . We will see later why is referred to as a binomial coefficient.    If , then , which implies that .      For any , including the empty set, what is ? For , what is equal to?      For , what is equal to?    If we let and vary, we can organize the binomial coefficients in a triangular array, often referred to as Pascal's Triangle . See Table .   Pascal's Triangle of binomial coefficients           6                               3  3  1      4  6  4  1      5  10  10  5  1      6  15  20  15  6  1       Suppose you have a pool of 6 applicants for a job opening. Let's assume you believe the values in Table .   How many ways can you choose 3 of the 6 applicants to interview?    How many ways can you hire 3 of the 6 applicants for 3 distinct jobs?         What are the row sums in Pascal's Triangle? That is, what is the following sum equal to for any ? .      Using the meanings of -subset and -permutation, explain why .    Using the previous problem, we immediately get the following handy formula for computing binomial coefficients.    For , we have     In the last expression above, the numerator of is counting how many distinct arrangements (order matters) there are of objects taken from objects and the denominator is essentially unordering arrangements (by Division Principle) that consist of the same objects.    A state senate consists of 19 Republicans and 14 Democrats. In how many ways can a committee be chosen if:   The committee contains 6 senators without regard to party?    The committee contains 3 Republicans and 3 Democrats?         How many bit strings of length 10 have exactly three 1's?      How many bit strings of length 6 have an odd number of 0's?      As we noted earlier, we did quite a bit of brute force to determine how many paths I could take to get coffee in Problem . Find a solution that utilizes binomial coefficients.      How many strings of 10 lower-case English letters have exactly two 's and exactly three 's?      Assume .   Using the definition of in terms of -subsets (as opposed to the formula in Theorem ), explain why This identity is often called Pascal's Identity (or Pascal's Recurrence ).    Connect the formula above with Problem involving my walk to get coffee.         Assume . It turns out that    Prove the identity above using the formula for given in Theorem .    Explain why the identity is true by using the definition of in terms of -subsets.     The upshot is that each row of Pascal's Triangle is a palindrome.      Explain why by counting the number of handshakes that could occur among a group of people in two different ways.    By the way, the number defined by is called the th Triangular number (due to the shape we get by representing each number in the sum by a stack of balls).    Without appealing to the previous problem, find a visual proof of the following: .   Hint: Consider a rectangular array of balls that has rows and columns.      Consider the linear equation . How many integer solutions are there if:    ?     ?     ?         How many ways can you distribute 5 identical lollipops to 6 kids?    These last two problems illustrate a technique known as stars and bars . In general, stars tally the number of objects and bars separate them into distinct categories.    The number of possible collections of objects of different types is       Zittles come in 5 colors: green, yellow, red, orange, and purple. How many different collections of 32 Zittles are possible?    "
},
{
  "id": "root-1-2-7-3",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-subset "
},
{
  "id": "root-1-2-7-4",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial coefficient "
},
{
  "id": "root-1-2-7-6",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-6",
  "type": "Example",
  "number": "4.1",
  "title": "",
  "body": "  If , then , which implies that .   "
},
{
  "id": "root-1-2-7-7",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-7",
  "type": "Problem",
  "number": "4.2",
  "title": "",
  "body": "  For any , including the empty set, what is ? For , what is equal to?   "
},
{
  "id": "root-1-2-7-8",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-8",
  "type": "Problem",
  "number": "4.3",
  "title": "",
  "body": "  For , what is equal to?   "
},
{
  "id": "root-1-2-7-9",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pascal's Triangle "
},
{
  "id": "table_Pascal",
  "level": "2",
  "url": "root-1-2-7.html#table_Pascal",
  "type": "Table",
  "number": "4.1",
  "title": "Pascal’s Triangle of binomial coefficients",
  "body": " Pascal's Triangle of binomial coefficients           6                               3  3  1      4  6  4  1      5  10  10  5  1      6  15  20  15  6  1    "
},
{
  "id": "root-1-2-7-11",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-11",
  "type": "Problem",
  "number": "4.4",
  "title": "",
  "body": "  Suppose you have a pool of 6 applicants for a job opening. Let's assume you believe the values in Table .   How many ways can you choose 3 of the 6 applicants to interview?    How many ways can you hire 3 of the 6 applicants for 3 distinct jobs?      "
},
{
  "id": "prob_sum_of_row_in_Pascal",
  "level": "2",
  "url": "root-1-2-7.html#prob_sum_of_row_in_Pascal",
  "type": "Problem",
  "number": "4.5",
  "title": "",
  "body": "  What are the row sums in Pascal's Triangle? That is, what is the following sum equal to for any ? .   "
},
{
  "id": "root-1-2-7-13",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-13",
  "type": "Problem",
  "number": "4.6",
  "title": "",
  "body": "  Using the meanings of -subset and -permutation, explain why .   "
},
{
  "id": "thm_binomial_formula",
  "level": "2",
  "url": "root-1-2-7.html#thm_binomial_formula",
  "type": "Theorem",
  "number": "4.7",
  "title": "",
  "body": "  For , we have    "
},
{
  "id": "root-1-2-7-17",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-17",
  "type": "Problem",
  "number": "4.8",
  "title": "",
  "body": "  A state senate consists of 19 Republicans and 14 Democrats. In how many ways can a committee be chosen if:   The committee contains 6 senators without regard to party?    The committee contains 3 Republicans and 3 Democrats?      "
},
{
  "id": "root-1-2-7-18",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-18",
  "type": "Problem",
  "number": "4.9",
  "title": "",
  "body": "  How many bit strings of length 10 have exactly three 1's?   "
},
{
  "id": "root-1-2-7-19",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-19",
  "type": "Problem",
  "number": "4.10",
  "title": "",
  "body": "  How many bit strings of length 6 have an odd number of 0's?   "
},
{
  "id": "root-1-2-7-20",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-20",
  "type": "Problem",
  "number": "4.11",
  "title": "",
  "body": "  As we noted earlier, we did quite a bit of brute force to determine how many paths I could take to get coffee in Problem . Find a solution that utilizes binomial coefficients.   "
},
{
  "id": "root-1-2-7-21",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-21",
  "type": "Problem",
  "number": "4.12",
  "title": "",
  "body": "  How many strings of 10 lower-case English letters have exactly two 's and exactly three 's?   "
},
{
  "id": "root-1-2-7-22",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-22",
  "type": "Problem",
  "number": "4.13",
  "title": "",
  "body": "  Assume .   Using the definition of in terms of -subsets (as opposed to the formula in Theorem ), explain why This identity is often called Pascal's Identity (or Pascal's Recurrence ).    Connect the formula above with Problem involving my walk to get coffee.      "
},
{
  "id": "root-1-2-7-23",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-23",
  "type": "Problem",
  "number": "4.14",
  "title": "",
  "body": "  Assume . It turns out that    Prove the identity above using the formula for given in Theorem .    Explain why the identity is true by using the definition of in terms of -subsets.     The upshot is that each row of Pascal's Triangle is a palindrome.   "
},
{
  "id": "root-1-2-7-24",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-24",
  "type": "Problem",
  "number": "4.15",
  "title": "",
  "body": "  Explain why by counting the number of handshakes that could occur among a group of people in two different ways.   "
},
{
  "id": "root-1-2-7-25",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Triangular number "
},
{
  "id": "root-1-2-7-26",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-26",
  "type": "Problem",
  "number": "4.16",
  "title": "",
  "body": "  Without appealing to the previous problem, find a visual proof of the following: .   Hint: Consider a rectangular array of balls that has rows and columns.   "
},
{
  "id": "root-1-2-7-27",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-27",
  "type": "Problem",
  "number": "4.17",
  "title": "",
  "body": "  Consider the linear equation . How many integer solutions are there if:    ?     ?     ?      "
},
{
  "id": "root-1-2-7-28",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-28",
  "type": "Problem",
  "number": "4.18",
  "title": "",
  "body": "  How many ways can you distribute 5 identical lollipops to 6 kids?   "
},
{
  "id": "root-1-2-7-29",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stars and bars "
},
{
  "id": "root-1-2-7-30",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-30",
  "type": "Theorem",
  "number": "4.19",
  "title": "",
  "body": "  The number of possible collections of objects of different types is    "
},
{
  "id": "root-1-2-7-31",
  "level": "2",
  "url": "root-1-2-7.html#root-1-2-7-31",
  "type": "Problem",
  "number": "4.20",
  "title": "",
  "body": "  Zittles come in 5 colors: green, yellow, red, orange, and purple. How many different collections of 32 Zittles are possible?   "
},
{
  "id": "root-1-2-8",
  "level": "1",
  "url": "root-1-2-8.html",
  "type": "Chapter",
  "number": "5",
  "title": "The Binomial Theorem",
  "body": " The Binomial Theorem  Recall that counts the number of subsets of size taken from a set of size . Each is called a binomial coefficient, which likely seems like a strange name. Why are these numbers called binomial coefficients? In general a binomial is just a polynomial with two terms. Let's see what we can discover.  We see that .  The coefficients in this expansion are . Hey, we saw those in row of Pascal's Triangle! Let's try a larger example. We see that .  This time the coefficients are , which is the next row of Pascal's Triangle. What's going on here?  Consider the expansion of . The key observation is that before commuting factors and collecting like terms, the terms in the expansion consist of all possible products where we choose either or from each factor. Each such term will consist of letters. In particular, if there are copies of in a term, there will be copies of (and vice versa). Moreover, every possible configuration of copies of (i.e., location of the 's in the term before doing any commuting with and ) will be represented. This means there will be precisely many terms with copies of (and copies of ). Thus, when we commute and then collect like terms, the coefficient on will indeed be . This leads us to the following remarkable fact, known as the Binomial Theorem .   The Binomial Theorem   For , we have     In light of the Binomial Theorem, the binomial coefficients are the positive integers that occur as coefficients in the expansions of powers of binomials. Said another way, the coefficients in the expansion of correspond to the entries in the th row of Pascal's Triangle.    Expand each of the following.                  What is the coefficient of in ?      What is the coefficient of in ?      In Problem , we discovered the following combinatorial identity: .  Prove this fact using the Binomial Theorem.      Determine what the sum is equal to.      Complete each of the following.   Expand .    Assuming , take the derivative with respect to of each side of the identity you discovered in Part (a).    What happens if ?         Suppose we have people.   Let . How many ways can we choose a team of people to play dodgeball where one of the people on the team is designated team captain?    How many ways can we choose of team of any size from 1 up to where one of the people on the team is designated team captain?       "
},
{
  "id": "root-1-2-8-6",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Binomial Theorem "
},
{
  "id": "root-1-2-8-7",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-7",
  "type": "Theorem",
  "number": "5.1",
  "title": "The Binomial Theorem.",
  "body": " The Binomial Theorem   For , we have    "
},
{
  "id": "root-1-2-8-9",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-9",
  "type": "Problem",
  "number": "5.2",
  "title": "",
  "body": "  Expand each of the following.               "
},
{
  "id": "root-1-2-8-10",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-10",
  "type": "Problem",
  "number": "5.3",
  "title": "",
  "body": "  What is the coefficient of in ?   "
},
{
  "id": "root-1-2-8-11",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-11",
  "type": "Problem",
  "number": "5.4",
  "title": "",
  "body": "  What is the coefficient of in ?   "
},
{
  "id": "root-1-2-8-12",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-12",
  "type": "Problem",
  "number": "5.5",
  "title": "",
  "body": "  In Problem , we discovered the following combinatorial identity: .  Prove this fact using the Binomial Theorem.   "
},
{
  "id": "root-1-2-8-13",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-13",
  "type": "Problem",
  "number": "5.6",
  "title": "",
  "body": "  Determine what the sum is equal to.   "
},
{
  "id": "root-1-2-8-14",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-14",
  "type": "Problem",
  "number": "5.7",
  "title": "",
  "body": "  Complete each of the following.   Expand .    Assuming , take the derivative with respect to of each side of the identity you discovered in Part (a).    What happens if ?      "
},
{
  "id": "root-1-2-8-15",
  "level": "2",
  "url": "root-1-2-8.html#root-1-2-8-15",
  "type": "Problem",
  "number": "5.8",
  "title": "",
  "body": "  Suppose we have people.   Let . How many ways can we choose a team of people to play dodgeball where one of the people on the team is designated team captain?    How many ways can we choose of team of any size from 1 up to where one of the people on the team is designated team captain?      "
},
{
  "id": "chap_pigeonhole_principle",
  "level": "1",
  "url": "chap_pigeonhole_principle.html",
  "type": "Chapter",
  "number": "6",
  "title": "Pigeonhole Principle",
  "body": " Pigeonhole Principle  The Pigeonhole Principle is a very natural idea. It says: If a collection of at least objects is put into boxes, then there is a box with at least two things in it. The Pigeonhole Principle has surprisingly deep applications. We will start with a few examples.    Back in Problem , we implicitly used the Pigeonhole Principle when we argued that if is a function for finite sets and , then   If is an injection, then .    If is a surjection, then .         A box has blue, green, yellow, red, orange, and white balls. How many must be drawn without looking to be sure of getting at least two of the same color?      Prove that if seven distinct numbers are selected from , then there exists a pair of numbers that sum to 12.    We would like to generalize the Pigeonhole Principle, but first we need a useful function. The ceiling function of a real number , written , is the smallest integer greater than or equal to . That is, is an integer, , and there is no other integer between and . You can think of it as the round-up to an integer function.    For example, , , and .    We can now generalize the Pigeonhole Principle as follows.   Generalized Pigeonhole Principle   If objects are placed in boxes, then there is a box with at least objects.      If 20 buses seating at most 50 carry 621 passengers to a ball game, then some bus must have at least        passengers.      How many balls must be drawn from the box in Problem in order to be sure of getting at least 4 of the same color?      Suppose and let . Argue that if we choose distinct elements from the set , then among those elements there must exist a pair of numbers such that one is a multiple of the other. Hint: Every number in is of the form , where is a nonnegative integer and is odd.      Explain why every collection of ten distinct integers must have at least one subset whose sum of the elements in the subset is divisible by 10.    "
},
{
  "id": "chap_pigeonhole_principle-2",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pigeonhole Principle "
},
{
  "id": "chap_pigeonhole_principle-3",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-3",
  "type": "Example",
  "number": "6.1",
  "title": "",
  "body": "  Back in Problem , we implicitly used the Pigeonhole Principle when we argued that if is a function for finite sets and , then   If is an injection, then .    If is a surjection, then .      "
},
{
  "id": "prob_colored_balls_in_box",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#prob_colored_balls_in_box",
  "type": "Problem",
  "number": "6.2",
  "title": "",
  "body": "  A box has blue, green, yellow, red, orange, and white balls. How many must be drawn without looking to be sure of getting at least two of the same color?   "
},
{
  "id": "chap_pigeonhole_principle-5",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-5",
  "type": "Problem",
  "number": "6.3",
  "title": "",
  "body": "  Prove that if seven distinct numbers are selected from , then there exists a pair of numbers that sum to 12.   "
},
{
  "id": "chap_pigeonhole_principle-6",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ceiling function "
},
{
  "id": "chap_pigeonhole_principle-7",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-7",
  "type": "Example",
  "number": "6.4",
  "title": "",
  "body": "  For example, , , and .   "
},
{
  "id": "chap_pigeonhole_principle-9",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-9",
  "type": "Theorem",
  "number": "6.5",
  "title": "Generalized Pigeonhole Principle.",
  "body": " Generalized Pigeonhole Principle   If objects are placed in boxes, then there is a box with at least objects.   "
},
{
  "id": "chap_pigeonhole_principle-10",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-10",
  "type": "Problem",
  "number": "6.6",
  "title": "",
  "body": "  If 20 buses seating at most 50 carry 621 passengers to a ball game, then some bus must have at least        passengers.   "
},
{
  "id": "chap_pigeonhole_principle-11",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-11",
  "type": "Problem",
  "number": "6.7",
  "title": "",
  "body": "  How many balls must be drawn from the box in Problem in order to be sure of getting at least 4 of the same color?   "
},
{
  "id": "chap_pigeonhole_principle-12",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-12",
  "type": "Problem",
  "number": "6.8",
  "title": "",
  "body": "  Suppose and let . Argue that if we choose distinct elements from the set , then among those elements there must exist a pair of numbers such that one is a multiple of the other. Hint: Every number in is of the form , where is a nonnegative integer and is odd.   "
},
{
  "id": "chap_pigeonhole_principle-13",
  "level": "2",
  "url": "chap_pigeonhole_principle.html#chap_pigeonhole_principle-13",
  "type": "Problem",
  "number": "6.9",
  "title": "",
  "body": "  Explain why every collection of ten distinct integers must have at least one subset whose sum of the elements in the subset is divisible by 10.   "
},
{
  "id": "chap_PIE",
  "level": "1",
  "url": "chap_PIE.html",
  "type": "Chapter",
  "number": "7",
  "title": "Principle of Inclusion and Exclusion",
  "body": " Principle of Inclusion and Exclusion  We now introduce a concept known as the Principal of Inclusion and Exclusion . Recall Theorem , which states that if and are sets, then     How many integers between 1 and 881 inclusively are divisible by 3 or 5?    But what do we do if we have more than two sets? Let's first examine the situation with three sets.    If , and are sets, then find a formula in the same vein as Theorem for .    The upshot is that we add singles subtract doubles and add triples .    In the Natteranian township, 750 of the residents have a smart phone, 620 have a laptop computer, 480 have a desktop computer, 420 have both a laptop and a smart phone, 390 have both a smart phone and a desktop, 212 have both a laptop and a desktop computer and 164 have all three items.   How many residents have at least one of the three items?    How many residents do not have desktop computer?    How many residents have a smart phone or a laptop?    How many have a smart phone or a laptop but not a desktop?       We can generalize to any finite number of sets.   Principal of Inclusion and Exclusion   The number of elements in the union of finite sets is       How many nonnegative integer solutions does the equation have such that , , and ?    We now discuss one important application of the Principle of Inclusion and Exclusion. Formally, a derangement is a permutation such that for all (i.e., has no fixed points). That is, a derangement is a special rearrangement of objects such that none is in its original spot.    How many derangements of CAT are there?    Let denote the number of derangements of . We set .    For , let be the set of permutations that fix .   Explain why .    Explain why .    Explain why the number of derangements of is          Using the previous problem, verify that we got the right answer to Problem .      If 7 hats are left at the hat-check window, in how many ways can they be returned so that no one gets the correct hat?    Now, just for funsies from second semester calculus, we know , which implies that .  Using Part (c) of Problem , we see that .  In other words, when is large, the probability of selecting a derangement at random from the collection of permutations of is approximately . As increases, the approximation improves. Boom.  "
},
{
  "id": "chap_PIE-2",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Principal of Inclusion and Exclusion "
},
{
  "id": "chap_PIE-3",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-3",
  "type": "Problem",
  "number": "7.1",
  "title": "",
  "body": "  How many integers between 1 and 881 inclusively are divisible by 3 or 5?   "
},
{
  "id": "chap_PIE-5",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-5",
  "type": "Problem",
  "number": "7.2",
  "title": "",
  "body": "  If , and are sets, then find a formula in the same vein as Theorem for .   "
},
{
  "id": "chap_PIE-7",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-7",
  "type": "Problem",
  "number": "7.3",
  "title": "",
  "body": "  In the Natteranian township, 750 of the residents have a smart phone, 620 have a laptop computer, 480 have a desktop computer, 420 have both a laptop and a smart phone, 390 have both a smart phone and a desktop, 212 have both a laptop and a desktop computer and 164 have all three items.   How many residents have at least one of the three items?    How many residents do not have desktop computer?    How many residents have a smart phone or a laptop?    How many have a smart phone or a laptop but not a desktop?      "
},
{
  "id": "chap_PIE-9",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-9",
  "type": "Theorem",
  "number": "7.4",
  "title": "Principal of Inclusion and Exclusion.",
  "body": " Principal of Inclusion and Exclusion   The number of elements in the union of finite sets is    "
},
{
  "id": "chap_PIE-10",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-10",
  "type": "Problem",
  "number": "7.5",
  "title": "",
  "body": "  How many nonnegative integer solutions does the equation have such that , , and ?   "
},
{
  "id": "chap_PIE-11",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derangement "
},
{
  "id": "prob_derangements_CAT",
  "level": "2",
  "url": "chap_PIE.html#prob_derangements_CAT",
  "type": "Problem",
  "number": "7.6",
  "title": "",
  "body": "  How many derangements of CAT are there?   "
},
{
  "id": "prob_number_of_derangements",
  "level": "2",
  "url": "chap_PIE.html#prob_number_of_derangements",
  "type": "Problem",
  "number": "7.7",
  "title": "",
  "body": "  For , let be the set of permutations that fix .   Explain why .    Explain why .    Explain why the number of derangements of is       "
},
{
  "id": "chap_PIE-15",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-15",
  "type": "Problem",
  "number": "7.8",
  "title": "",
  "body": "  Using the previous problem, verify that we got the right answer to Problem .   "
},
{
  "id": "chap_PIE-16",
  "level": "2",
  "url": "chap_PIE.html#chap_PIE-16",
  "type": "Problem",
  "number": "7.9",
  "title": "",
  "body": "  If 7 hats are left at the hat-check window, in how many ways can they be returned so that no one gets the correct hat?   "
},
{
  "id": "root-1-2-11",
  "level": "1",
  "url": "root-1-2-11.html",
  "type": "Chapter",
  "number": "8",
  "title": "Mathematical Induction",
  "body": " Mathematical Induction  In this chapter, we introduce mathematical induction , which is a proof technique that is useful for proving statements of the form For all natural numbers , , or more generally For all integers , , where is some predicate. Loosely speaking, a predicate is some statement about . For example, is prime is a predicate.  Consider the claims:   For all , .    For all , is prime.     Let's take a look at potential proofs.    Proof of (a). If , then . If , then . If , then , and so on.    Proof of (b). If , then , which is prime. If , then , which is prime. If , then , which is prime, and so on.  Are these actual proofs? No! In fact, the second claim is not even true. If , then , which is not prime since it has 41 as a factor. It turns out that the first claim is true, but what we wrote cannot be a proof since the same type of reasoning when applied to the second claim seems to prove something that is not actually true. We need a rigorous way of capturing and so on and a way to verify whether it really is and so on.   We will not formally prove the following theorem, but instead rely on our intuition.   Principle of Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume    is true, and    for all , if is true, then is true.     Then is true for all .    The Principle of Mathematical Induction (or PMI for short) provides us with a process for proving statements of the form For all natural numbers , , where is some predicate involving . Hypothesis (i) above is called the base step (or base case ) while (ii) is called the inductive step .  Intuitively, here is what the Principle of Mathematical Induction is saying. Think of the statements as being rungs of a ladder. The base step indicates that we can step onto the first rung of the ladder while the inductive step tells us that if we are on a rung of the ladder we can always move up to the next rung. The Principle of Mathematical Induction asserts that if we can achieve these two things, then we can climb the entire infinite ladder. Do you agree that this seems reasonable?  You should not confuse mathematical induction with inductive reasoning associated with the natural sciences. Inductive reasoning is a scientific method whereby one induces general principles from observations. On the other hand, mathematical induction is a deductive form of reasoning used to establish the validity of a proposition.  Here is the general structure for a proof by induction.   Proof of For all , by Induction   Here is the general structure for a proof by induction.   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]   Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all .       Conjecture a nice formula for the following summation and then prove your claim using induction: .  Independent of induction, can you think of a nice visual proof of this result?      Prove the first claim that we introduced at the beginning of the chapter using induction. That is, prove that for all , .      Prove that for all , 3 divides .      Consider a grid of squares that is squares wide by squares long, where . One of the squares has been cut out, but you do not know which one! You have a bunch of L-shapes made up of squares. Prove that you can perfectly cover this chessboard with the L-shapes (with no overlap) for any . Figure depicts one possible covering for the case involving and a fixed cut-out square.     One possible covering for the case involving for Problem .      Mathematical induction can actually be used to prove a broader family of results; namely, those of the form For all integers , , where . Theorem handles the special case when . The ladder analogy from earlier holds for this more general situation, too.   Generalized PMI   Let be a sequence of statements, one for each integer greater than or equal to . Assume that    is true, and    for all , if is true, then is true.     Then is true for all integers .     Proof of For all , if , then by Induction   Here is the general structure for a proof by induction when the base case does not necessarily involve .   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]  Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let be an integer and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all integers .     We already encountered the next result back Problem , but let's see if we can use induction to prove it.    Use induction to prove that if is a finite set with elements, then has subsets.      Determine when for integer values and prove the claim using mathematical induction.      Determine when for integer values and prove the claim using mathematical induction.    There is another formulation of induction, where the inductive step begins with a set of assumptions rather than one single assumption. This method is sometimes called complete induction or strong induction .   Principle of Complete Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume that    is true for some , and    For all with , if is true for all such that , then is true.     Then is true for all .    Note the difference between ordinary induction ( Theorems and ) and complete induction. For the induction step of complete induction, we are not only assuming that is true, but rather that is true for all from to . Despite the name, complete induction is not any stronger or more powerful than ordinary induction. It is worth pointing out that anytime ordinary induction is an appropriate proof technique, so is complete induction. So, when should we use complete induction?  In the inductive step, you need to reach , and you should ask yourself which of the previous cases you need to get there. If all you need is the statement , then ordinary induction is the way to go. If, for example, two preceding cases, and , are necessary to reach , then complete induction is appropriate. In the extreme, if one needs the full range of preceding cases (i.e., all statements ), then again complete induction should be utilized.  Note that in situations where complete induction is appropriate, it might be the case that you need to verify more than one case in the base step. The number of base cases to be checked depends on how far one needs to look back in the induction step.  Here is the general structure for a proof by complete induction, where the base case includes and possibly more.   Proof of For all , by Complete Induction   Here is the general structure for a proof by complete induction.   We proceed by complete induction.  Base step: [Verify that each of the statements are true. The value of depends on the statement.]  Inductive step: [Your goal is to prove For all with , if is true for all such that , then is true. ] Let with and suppose is true for all . [Do something to derive that is true.] Therefore, is true.    Thus, by complete induction, is true for all .     When tackling the remaining problems in this chapter, think carefully about how many base steps you must verify.    The Fibonacci sequence is given by , , and for all natural numbers . Prove that for all .    Recall that Theorem generalized Theorem and allowed us to handle situations where the base case was something other than . We can generalize complete induction in the same way, but we will not write this down as a formal theorem.    Prove that every amount of postage that is at least cents can be made from -cent and -cent stamps.      Consider a grid of squares that is squares wide and squares long. Using dominoes that are square by squares, there are many ways to perfectly cover this grid with no overlap. How many? Prove your answer.    One final thing worth mentioning is that we did not write down a rigorous proof of the Principle of Inclusion and Exclusion, which we encountered in Chapter . However, this omission could be remedied using induction. That is, using induction, we could prove that for all and finite sets , we have .  If , the expression above simply says , which is certainly true. For , we have , which is the General Sum Principle that we encountered in Theorem . The inductive step is a bit messy , so we will omit it, but if you are interested, you can find a complete proof here .  "
},
{
  "id": "root-1-2-11-2",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical induction "
},
{
  "id": "thm_PMI",
  "level": "2",
  "url": "root-1-2-11.html#thm_PMI",
  "type": "Theorem",
  "number": "8.1",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume    is true, and    for all , if is true, then is true.     Then is true for all .   "
},
{
  "id": "root-1-2-11-10",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base step base case inductive step "
},
{
  "id": "skeleton_induction",
  "level": "2",
  "url": "root-1-2-11.html#skeleton_induction",
  "type": "Skeleton Proof",
  "number": "8.2",
  "title": "Proof of “For all <span class=\"process-math\">\\(n\\in\\mathbb{N}\\text{,}\\)<\/span> <span class=\"process-math\">\\(P(n)\\)<\/span>” by Induction.",
  "body": " Proof of For all , by Induction   Here is the general structure for a proof by induction.   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]   Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all .    "
},
{
  "id": "root-1-2-11-15",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-15",
  "type": "Problem",
  "number": "8.3",
  "title": "",
  "body": "  Conjecture a nice formula for the following summation and then prove your claim using induction: .  Independent of induction, can you think of a nice visual proof of this result?   "
},
{
  "id": "root-1-2-11-16",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-16",
  "type": "Problem",
  "number": "8.4",
  "title": "",
  "body": "  Prove the first claim that we introduced at the beginning of the chapter using induction. That is, prove that for all , .   "
},
{
  "id": "root-1-2-11-17",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-17",
  "type": "Problem",
  "number": "8.5",
  "title": "",
  "body": "  Prove that for all , 3 divides .   "
},
{
  "id": "prob_L-shapes",
  "level": "2",
  "url": "root-1-2-11.html#prob_L-shapes",
  "type": "Problem",
  "number": "8.6",
  "title": "",
  "body": "  Consider a grid of squares that is squares wide by squares long, where . One of the squares has been cut out, but you do not know which one! You have a bunch of L-shapes made up of squares. Prove that you can perfectly cover this chessboard with the L-shapes (with no overlap) for any . Figure depicts one possible covering for the case involving and a fixed cut-out square.   "
},
{
  "id": "fig_L-shapes",
  "level": "2",
  "url": "root-1-2-11.html#fig_L-shapes",
  "type": "Figure",
  "number": "8.1",
  "title": "",
  "body": " One possible covering for the case involving for Problem .     "
},
{
  "id": "thm_PMI2",
  "level": "2",
  "url": "root-1-2-11.html#thm_PMI2",
  "type": "Theorem",
  "number": "8.7",
  "title": "Generalized PMI.",
  "body": " Generalized PMI   Let be a sequence of statements, one for each integer greater than or equal to . Assume that    is true, and    for all , if is true, then is true.     Then is true for all integers .   "
},
{
  "id": "skeleton_induction_greater_than_a",
  "level": "2",
  "url": "root-1-2-11.html#skeleton_induction_greater_than_a",
  "type": "Skeleton Proof",
  "number": "8.8",
  "title": "Proof of “For all <span class=\"process-math\">\\(n \\in \\mathbb{Z}\\text{,}\\)<\/span> if <span class=\"process-math\">\\(n \\geq a\\text{,}\\)<\/span> then <span class=\"process-math\">\\(P(n)\\)<\/span>” by Induction.",
  "body": " Proof of For all , if , then by Induction   Here is the general structure for a proof by induction when the base case does not necessarily involve .   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]  Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let be an integer and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all integers .    "
},
{
  "id": "prob_number_of_subsets_alt",
  "level": "2",
  "url": "root-1-2-11.html#prob_number_of_subsets_alt",
  "type": "Problem",
  "number": "8.9",
  "title": "",
  "body": "  Use induction to prove that if is a finite set with elements, then has subsets.   "
},
{
  "id": "root-1-2-11-25",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-25",
  "type": "Problem",
  "number": "8.10",
  "title": "",
  "body": "  Determine when for integer values and prove the claim using mathematical induction.   "
},
{
  "id": "root-1-2-11-26",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-26",
  "type": "Problem",
  "number": "8.11",
  "title": "",
  "body": "  Determine when for integer values and prove the claim using mathematical induction.   "
},
{
  "id": "root-1-2-11-27",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete induction strong induction "
},
{
  "id": "root-1-2-11-28",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-28",
  "type": "Theorem",
  "number": "8.12",
  "title": "Principle of Complete Mathematical Induction.",
  "body": " Principle of Complete Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume that    is true for some , and    For all with , if is true for all such that , then is true.     Then is true for all .   "
},
{
  "id": "skeleton_complete_induction",
  "level": "2",
  "url": "root-1-2-11.html#skeleton_complete_induction",
  "type": "Skeleton Proof",
  "number": "8.13",
  "title": "Proof of “For all <span class=\"process-math\">\\(n\\in\\mathbb{N}\\text{,}\\)<\/span> <span class=\"process-math\">\\(P(n)\\)<\/span>” by Complete Induction.",
  "body": " Proof of For all , by Complete Induction   Here is the general structure for a proof by complete induction.   We proceed by complete induction.  Base step: [Verify that each of the statements are true. The value of depends on the statement.]  Inductive step: [Your goal is to prove For all with , if is true for all such that , then is true. ] Let with and suppose is true for all . [Do something to derive that is true.] Therefore, is true.    Thus, by complete induction, is true for all .    "
},
{
  "id": "prob_Fibonacci",
  "level": "2",
  "url": "root-1-2-11.html#prob_Fibonacci",
  "type": "Problem",
  "number": "8.14",
  "title": "",
  "body": "  The Fibonacci sequence is given by , , and for all natural numbers . Prove that for all .   "
},
{
  "id": "root-1-2-11-37",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-37",
  "type": "Problem",
  "number": "8.15",
  "title": "",
  "body": "  Prove that every amount of postage that is at least cents can be made from -cent and -cent stamps.   "
},
{
  "id": "root-1-2-11-38",
  "level": "2",
  "url": "root-1-2-11.html#root-1-2-11-38",
  "type": "Problem",
  "number": "8.16",
  "title": "",
  "body": "  Consider a grid of squares that is squares wide and squares long. Using dominoes that are square by squares, there are many ways to perfectly cover this grid with no overlap. How many? Prove your answer.   "
},
{
  "id": "root-1-2-12",
  "level": "1",
  "url": "root-1-2-12.html",
  "type": "Chapter",
  "number": "9",
  "title": "Sequences and Recurrence Relations",
  "body": " Sequences and Recurrence Relations  In this chapter we will study sequences of numbers that are built recursively. Technically, a sequence (of real numbers) is a function from to . If , it is common to write . We refer to as the th term of the sequence. We will abuse notation and associate a sequence with its list of outputs, namely: , which we may abbreviate as . Sometimes we may start our sequences at as opposed to . That is, we may allow the domain of a sequence to be .    Define via . Then we have .    It is important to point out that not every sequence has a description in terms of an algebraic formula. For example, we could form a sequence out of the digits to the right of the decimal in the decimal expansion of , namely the th term of the sequence is the th digit to the right of the decimal. But then there is no nice algebraic formula for describing the th term of this sequence.  Loosely speaking, a sequence of numbers is defined recursively if the th term of the sequence is defined in terms of earlier terms of the sequence. We have already encountered one famous example of a sequence being defined recursively, namely the Fibonacci sequence , which we defined by , , and for . The equation is the recurrence relation while and are the initial conditions . It is important to emphasize that we cannot define the Fibonacci number using only the recurrence relation since otherwise, we would not be able to get started with the recurrence.  We have also encountered a few recurrence relations of a different flavor that arise out of two-dimensional arrays of numbers. For example:   Number of -permutations of : For , .    Number of -subsets of : For , .    Number of set partitions of with blocks: For , .     Notice that each of the descriptions above are not sufficient without also providing a way to get started . For the two-dimensional case, the initial conditions are often called boundary conditions . For the rest of this chapter, we will focus on one-dimensional sequences.  Here is an important general principle.    If two sequences satisfy the same recurrence relation and initial conditions, then the two sequences must be equal.      Recall that a composition of with parts is an ordered list of positive integers whose sum is , denoted . We say that is the th part.   How many compositions of have only odd parts?    How many compositions of have parts of size 1 and 2 only?         Prove that by utilizing one of the parts from Problem . What does this identity tell us about Pascal's Triangle?      For each of the following recursively defined sequences, generate the first few terms. If possible, find an explicit formula for the terms of the sequence.    , for .     , for .     , for .     , for .     , for .       By solving a recurrence relation together with its initial conditions we mean finding an explicit expression (sometimes called a closed form ) for an arbitrary term as a function of (but no earlier terms of the sequence). The explicit expression for is called the solution of the recurrence relation. For example, each time we found an explicit formula for the th term of a sequence in the previous problem, we were solving the recurrence relation and the corresponding expression we found is the solution. By the general solution of a recurrence relation, we mean the set of its solutions given any initial conditions.    Find the general solution for if the first term of the sequence is . What if the sequence starts at ?    It's important to point out that finding a solution to a recurrence relation can be quite complicated, maybe even impossible! However, verifying whether a proposed solution is correct or not is straightforward.    Consider the recurrence relation . Is a solution? How about ? How about ?    We now turn our attention to two special classes of recurrence relations. An arithmetic progression is a recurrence relation in which the first term (or ) and a common difference  are given and the corresponding recurrence relation is   A geometric progression is a recurrence relation in which the first term (or ) and common ratio  are given and the corresponding recurrence relation is     Compute the first few terms of each of the following and find the solution.   Arithmetic progression with and .    Geometric progression with and .         Conjecture a solution to an arithmetic progression with first term and common difference . Can you prove that your conjecture is correct?      Conjecture a solution to a geometric progression with first term and common ratio . Can you prove that your conjecture is correct?      Recall that the triangular numbers are defined via . The first few terms of this sequence are 1, 3, 6, 10, 15.   Express the triangular numbers using a recurrence relation and initial condition.    Is this sequence an arithmetic progression? Geometric progression?    Notice that the sequence of triangular numbers is a sequence of partial sums of the arithmetic sequence . What happens if we add the partial sum expression for to a second copy of written in reverse? Can you recover the nice closed form for we are already familiar with?       We can generalize the technique above for any sequence that is given by partial sums of an arithmetic sequence.    For , define . Find a closed form for .    What about sequences that are partial sums of geometric progressions? In this case, it turns out that we can multiply by the common ratio, shift, and subtract.    For , define . Find a closed form for .    A linear constant-coefficient recurrence relation of order  has the form where are real numbers with . Such a recurrence relation is said to be homogeneous if , so that it can be written as and is non-homogeneous otherwise.  Notice that every arithmetic progression and every geometric progression is a first order linear constant-coefficient recurrence relation. In particular, each geometric progression is homogeneous while each arithmetic progression is non-homogeneous.    Determine which of the following are linear constant-coefficient recurrence relations. For those that are, which are homogeneous and which are non-homogeneous?                                           Solve the first-order linear constant-coefficient non-homogeneous recurrence relation with initial condition .    Unfortunately, the technique of the previous example is difficult to generalize to higher orders.  The next theorem characterizes the phenomenon that we witnessed in Problem . This theorem can be proved by direct substitution and some algebraic manipulation.   Principle of Superposition   If are solutions to the linear constant-coefficient homogeneous recurrence relation and are real numbers, then the linear combination is also a solution.    We now focus on solving second-order linear constant-coefficient homogeneous recurrence relations. Given the second-order linear constant-coefficient homogeneous recurrence relation , its corresponding characteristic equation is defined via   The solutions of the characteristic equation are called characteristic roots .    The characteristic equation for the Fibonacci relation is , which has characteristic roots . Note that the characteristic root is the well-known golden ratio .    We will utilize the following remarkable theorem without proving it.    If and are two distinct characteristic roots (i.e., ) of the characteristic equation for , then the solution to the recurrence relation is where and are constants determined by the initial conditions.      Solve with initial conditions and .      Use the previous problem to find a solution to the Fibonacci sequence given by , , and . The closed form we just obtained for is called Binet's formula .    Although we will not consider examples more complicated than these, this characteristic root technique can be applied to much more complicated recurrence relations.  We now turn our attention to one of my favorite sequences, which is defined by a recurrence relation of a different flavor. The Catalan numbers are defined via and for . The equation above is called the Catalan recurrence . Using the initial condition and the Catalan recurrence, we can generate the first several terms of the Catalan sequence:   There are hundreds of interesting combinatorial objects counted by the Catalan numbers! Let's explore a few.    A Dyck path of length is a lattice path from to that takes steps East from to and steps North from to such that all points on the path satisfy . This sound more complicated that it really is. You can think of a Dyck path as one of our paths to get coffee that starts at and ends at but never drops below the line . Let denote set of all Dyck paths of length and let . We define for convenience. Important: Unfortunately, we also used to denote the number of derangements of . This problem is about Dyck path, not derangements.   Compute , , , and via brute force.    Show that satisfies the following recurrence for : . Hint: Consider the collection of Dyck paths that hit the line at for the first time after leaving . Think about how many ways you can draw the Dyck path to get to versus how many ways you can draw the Dyck path from to . The first case is trickier to think about. Notice that the portion of the Dyck path from to never hits the line along the way. Moreover, this portion necessarily starts with a North step and ends with an East step. What are the possible values for ?     Since satisfies the same recurrence and initial conditions, it follows that . That is, the number of Dyck paths is a Catalan number.      A sequence of parentheses is balanced if it can be parsed syntactically. In other words, there should be the same number of left parentheses ( and right parentheses ) , and when reading from left to right there should never be more right parentheses than left. Here are the five balanced parenthesizations containing three pairs: .  Prove that the number of balanced sequences of pairs of parentheses is . Hint: Use a bijection!      A triangulation of a convex -gon is a dissection into triangles using only lines from vertices to vertices. Think of the polygon as being fixed in space. Prove that the number of triangulations of a convex -gon is . Incidentally, this is the problem that Euler was interested in when he studied the Catalan numbers!    Let's see if we can find a closed form for the Catalan numbers!    Tackle each of the following.   Argue that the number of lattice paths (not just Dyck paths) from to is equal to .    Argue that the number of lattice paths from to is equal to .    Prove that there is a bijection from the set of lattice paths from to that pass below at least once to the set of lattice paths from to . Hint: Consider the first point on lattice path from to that passes below . Reflect the remaining portion of the path over the appropriate line to get a path from to .    Prove that .     It is easy to verify that , and since , we obtain .    "
},
{
  "id": "root-1-2-12-2",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence term "
},
{
  "id": "root-1-2-12-3",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-3",
  "type": "Example",
  "number": "9.1",
  "title": "",
  "body": "  Define via . Then we have .   "
},
{
  "id": "root-1-2-12-5",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recurrence relation initial conditions "
},
{
  "id": "root-1-2-12-7",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundary conditions "
},
{
  "id": "root-1-2-12-9",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-9",
  "type": "Theorem",
  "number": "9.2",
  "title": "",
  "body": "  If two sequences satisfy the same recurrence relation and initial conditions, then the two sequences must be equal.   "
},
{
  "id": "prob_compositions",
  "level": "2",
  "url": "root-1-2-12.html#prob_compositions",
  "type": "Problem",
  "number": "9.3",
  "title": "",
  "body": "  Recall that a composition of with parts is an ordered list of positive integers whose sum is , denoted . We say that is the th part.   How many compositions of have only odd parts?    How many compositions of have parts of size 1 and 2 only?      "
},
{
  "id": "root-1-2-12-11",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-11",
  "type": "Problem",
  "number": "9.4",
  "title": "",
  "body": "  Prove that by utilizing one of the parts from Problem . What does this identity tell us about Pascal's Triangle?   "
},
{
  "id": "root-1-2-12-12",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-12",
  "type": "Problem",
  "number": "9.5",
  "title": "",
  "body": "  For each of the following recursively defined sequences, generate the first few terms. If possible, find an explicit formula for the terms of the sequence.    , for .     , for .     , for .     , for .     , for .      "
},
{
  "id": "root-1-2-12-13",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solving closed form solution general solution "
},
{
  "id": "root-1-2-12-14",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-14",
  "type": "Problem",
  "number": "9.6",
  "title": "",
  "body": "  Find the general solution for if the first term of the sequence is . What if the sequence starts at ?   "
},
{
  "id": "prob_linear_combo_of_solutions",
  "level": "2",
  "url": "root-1-2-12.html#prob_linear_combo_of_solutions",
  "type": "Problem",
  "number": "9.7",
  "title": "",
  "body": "  Consider the recurrence relation . Is a solution? How about ? How about ?   "
},
{
  "id": "root-1-2-12-17",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arithmetic progression common difference "
},
{
  "id": "root-1-2-12-18",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric progression common ratio "
},
{
  "id": "root-1-2-12-19",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-19",
  "type": "Problem",
  "number": "9.8",
  "title": "",
  "body": "  Compute the first few terms of each of the following and find the solution.   Arithmetic progression with and .    Geometric progression with and .      "
},
{
  "id": "root-1-2-12-20",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-20",
  "type": "Problem",
  "number": "9.9",
  "title": "",
  "body": "  Conjecture a solution to an arithmetic progression with first term and common difference . Can you prove that your conjecture is correct?   "
},
{
  "id": "root-1-2-12-21",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-21",
  "type": "Problem",
  "number": "9.10",
  "title": "",
  "body": "  Conjecture a solution to a geometric progression with first term and common ratio . Can you prove that your conjecture is correct?   "
},
{
  "id": "root-1-2-12-22",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-22",
  "type": "Problem",
  "number": "9.11",
  "title": "",
  "body": "  Recall that the triangular numbers are defined via . The first few terms of this sequence are 1, 3, 6, 10, 15.   Express the triangular numbers using a recurrence relation and initial condition.    Is this sequence an arithmetic progression? Geometric progression?    Notice that the sequence of triangular numbers is a sequence of partial sums of the arithmetic sequence . What happens if we add the partial sum expression for to a second copy of written in reverse? Can you recover the nice closed form for we are already familiar with?      "
},
{
  "id": "root-1-2-12-24",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-24",
  "type": "Problem",
  "number": "9.12",
  "title": "",
  "body": "  For , define . Find a closed form for .   "
},
{
  "id": "root-1-2-12-26",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-26",
  "type": "Problem",
  "number": "9.13",
  "title": "",
  "body": "  For , define . Find a closed form for .   "
},
{
  "id": "root-1-2-12-27",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear constant-coefficient order homogeneous non-homogeneous "
},
{
  "id": "root-1-2-12-29",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-29",
  "type": "Problem",
  "number": "9.14",
  "title": "",
  "body": "  Determine which of the following are linear constant-coefficient recurrence relations. For those that are, which are homogeneous and which are non-homogeneous?                                        "
},
{
  "id": "root-1-2-12-30",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-30",
  "type": "Problem",
  "number": "9.15",
  "title": "",
  "body": "  Solve the first-order linear constant-coefficient non-homogeneous recurrence relation with initial condition .   "
},
{
  "id": "root-1-2-12-33",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-33",
  "type": "Theorem",
  "number": "9.16",
  "title": "Principle of Superposition.",
  "body": " Principle of Superposition   If are solutions to the linear constant-coefficient homogeneous recurrence relation and are real numbers, then the linear combination is also a solution.   "
},
{
  "id": "root-1-2-12-34",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "root-1-2-12-35",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic roots "
},
{
  "id": "root-1-2-12-36",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-36",
  "type": "Example",
  "number": "9.17",
  "title": "",
  "body": "  The characteristic equation for the Fibonacci relation is , which has characteristic roots . Note that the characteristic root is the well-known golden ratio .   "
},
{
  "id": "root-1-2-12-38",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-38",
  "type": "Theorem",
  "number": "9.18",
  "title": "",
  "body": "  If and are two distinct characteristic roots (i.e., ) of the characteristic equation for , then the solution to the recurrence relation is where and are constants determined by the initial conditions.   "
},
{
  "id": "root-1-2-12-39",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-39",
  "type": "Problem",
  "number": "9.19",
  "title": "",
  "body": "  Solve with initial conditions and .   "
},
{
  "id": "root-1-2-12-40",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-40",
  "type": "Problem",
  "number": "9.20",
  "title": "",
  "body": "  Use the previous problem to find a solution to the Fibonacci sequence given by , , and . The closed form we just obtained for is called Binet's formula .   "
},
{
  "id": "root-1-2-12-42",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Catalan numbers Catalan recurrence "
},
{
  "id": "root-1-2-12-44",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-44",
  "type": "Problem",
  "number": "9.21",
  "title": "",
  "body": "  A Dyck path of length is a lattice path from to that takes steps East from to and steps North from to such that all points on the path satisfy . This sound more complicated that it really is. You can think of a Dyck path as one of our paths to get coffee that starts at and ends at but never drops below the line . Let denote set of all Dyck paths of length and let . We define for convenience. Important: Unfortunately, we also used to denote the number of derangements of . This problem is about Dyck path, not derangements.   Compute , , , and via brute force.    Show that satisfies the following recurrence for : . Hint: Consider the collection of Dyck paths that hit the line at for the first time after leaving . Think about how many ways you can draw the Dyck path to get to versus how many ways you can draw the Dyck path from to . The first case is trickier to think about. Notice that the portion of the Dyck path from to never hits the line along the way. Moreover, this portion necessarily starts with a North step and ends with an East step. What are the possible values for ?     Since satisfies the same recurrence and initial conditions, it follows that . That is, the number of Dyck paths is a Catalan number.   "
},
{
  "id": "root-1-2-12-45",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-45",
  "type": "Problem",
  "number": "9.22",
  "title": "",
  "body": "  A sequence of parentheses is balanced if it can be parsed syntactically. In other words, there should be the same number of left parentheses ( and right parentheses ) , and when reading from left to right there should never be more right parentheses than left. Here are the five balanced parenthesizations containing three pairs: .  Prove that the number of balanced sequences of pairs of parentheses is . Hint: Use a bijection!   "
},
{
  "id": "root-1-2-12-46",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-46",
  "type": "Problem",
  "number": "9.23",
  "title": "",
  "body": "  A triangulation of a convex -gon is a dissection into triangles using only lines from vertices to vertices. Think of the polygon as being fixed in space. Prove that the number of triangulations of a convex -gon is . Incidentally, this is the problem that Euler was interested in when he studied the Catalan numbers!   "
},
{
  "id": "root-1-2-12-48",
  "level": "2",
  "url": "root-1-2-12.html#root-1-2-12-48",
  "type": "Problem",
  "number": "9.24",
  "title": "",
  "body": "  Tackle each of the following.   Argue that the number of lattice paths (not just Dyck paths) from to is equal to .    Argue that the number of lattice paths from to is equal to .    Prove that there is a bijection from the set of lattice paths from to that pass below at least once to the set of lattice paths from to . Hint: Consider the first point on lattice path from to that passes below . Reflect the remaining portion of the path over the appropriate line to get a path from to .    Prove that .     It is easy to verify that , and since , we obtain .   "
},
{
  "id": "root-1-2-13",
  "level": "1",
  "url": "root-1-2-13.html",
  "type": "Chapter",
  "number": "10",
  "title": "Introduction to Graph Theory",
  "body": " Introduction to Graph Theory  Loosely speaking, a graph is a collection of points called vertices and connecting segments called edges, each of which starts at a vertex, ends at a vertex and contains no other vertices beside these. More formally, we define the term as follows. A graph consists of two sets, a nonempty set of points called vertices and a set whose elements, called edges , are multisets of size two from .  Each edge is associated with either one vertex which serves as both endpoints or two vertices as its endpoints. Technically, each edge is a multiset of the form where . We say that and are endpoints of the edge . In an abuse of notation, it is customary to write even if . In fact, we may abbreviate further and denote the edge by . Note that the order in which the vertices of an edge are listed is irrelevant. That is, , , and . If is the graph associated with the vertex set and edge set , we write . It is worth pointing out that we assumed that is nonempty, but is allowed to be empty (i.e., the graph has no edges).  It is customary to represent a graph using visual representations, where each vertex is a dot and each edge is a connecting segment, not necessarily straight.    Here is an example of a graph with vertex set .         Find at least five different graphs with vertex sets .    There is a lot of terminology associated to graphs! Here are some of the relevant concepts.   Vertices and of a graph are adjacent if they are the endpoints of the same edge.    If is an endpoint of the edge , we say that is incident to .    If an edge is incident to vertices and , we say that and are connected by edge .    An edge that is incident to a single vertex (i.e., for some ) is called a loop .    The order of a graph is the number of vertices in the graph. That is, if , then the order of is .    The degree of a vertex , written , is the number of edges incident to (i.e., the number of edges that have as an endpoint). Note that a loop contributes 2 to a vertex's degree, one for each of the two ends of the edge. The degree of a vertex is denoted .       Discuss each of the concepts introduced above in the context of Example .    Many graphs have similar properties that allow us to categorize them. Here are several families of graphs.    Complete Graphs . The complete graph on vertices, denoted , is the graph of order such that each pair of vertices is connected by exactly one edge, and there are no other edges (i.e., no loops).     Cycle Graphs . The cycle graph on vertices, denoted , is the graph such that when the vertices are suitably labeled , the edges of are .     Path Graphs . The path on vertices, denoted , has a description similar to : for distinct vertices suitably labeled , the edges of are .     Wheel Graphs . The wheel graph on vertices, denoted , is the graph together with one additional vertex that is connected to each of the vertices of .     Hypercube Graphs . The hypercube of dimension , denoted , is the graph whose vertices are labeled with the bit strings of length with an edge connecting two vertices if and only if their labels differ in exactly one bit.       Draw the first few graphs of each of the graph families above.      How many edges do each of the following have?                               A simple graph is a graph in which each edge connects two distinct vertices and each pair of vertices is connected by at most one edge. Note that the graphs , and are all simple graphs. A pseudograph (or multigraph ) is like a graph but we allow multiple edges between a pair of vertices (i.e., is a multiset instead of a set).    Draw examples of simple graphs, non-simple graphs, and psuedographs on 3 vertices.    A simple graph is bipartite if there is a partition of into two nonempty sets (i.e., , , , and ) such that each edge of connects a vertex in and a vertex in . The pair is called a bipartition of the graph.    Provide an example of a bipartite graph with 5 vertices.    The following theorem provides a nice characterization of bipartite graphs.    A graph is bipartite if each vertex can be colored with one of two colors so that each pair of adjacent vertices have different colors.      Which complete graphs are bipartite?      Which path graphs are bipartite?      Which cycle graphs are bipartite?      Is bipartite?    A bipartite graph with bipartition such that and is the complete bipartite graph  if it contains each edge for every pair and . Note that .    Draw , , , , .    The next result is sometimes referred to as the Handshake Lemma . Do you see why?   Degree Sum Formula   In any graph, the sum of the degrees of vertices in the graph is always twice the number of edges. In other words, in a graph , .      At a recent party, 9 people greeted each other by shaking hands. Is it possible that each person shook hands with exactly 7 people at the party?    Sometimes it is convenient to use the term even vertex or odd vertex to refer to a vertex whose degree is even or odd, respectively.    Explain why every graph has an even number of odd vertices.    The degree sequence of a graph is the list of the degrees of the vertices of the graph in descending order. A finite list of nonnegative integers in descending order is graphic if it is the degree sequence of a simple graph.    Find the degree sequences for ( ), ( ), ( ), ( ), and ( ).      Which of the following are graphic sequences?   3332    3331    44332         Find two different graphs that have 32222111 as their degree sequence.      If is the degree sequence for a graph of order , then must be even.    One consequence of the previous theorem is that any sequence with an odd sum (e.g., 331) is not graphic. It turns out that if a sequence has an even sum, it is the degree sequence of a multigraph. The construction of such a graph is straightforward: connect vertices with odd degrees in pairs, and fill out the remaining even degree counts by self-loops. The question of whether a given degree sequence can be realized by a simple graph is more challenging. This problem is also called graph realization problem and can be solved by either the Erdös Gallai theorem or the Havel Hakimi algorithm. Unfortunately, this is beyond the scope of this course.  We will now focus on making new graphs from old. Below are several definitions.   A graph is a subgraph of a graph if and (i.e., the vertices of are vertices of and the edges of are edges of ). If is a subgraph of , we may write .    A graph is an induced subgraph of a graph if and consists of all of the edges in that have both endpoints in . That is, for any two vertices , and are adjacent in if and only if and are adjacent in .    If is a graph and , then the subgraph of induced by , denoted , is the induced subgraph of with vertex set .    The union of two graphs and is the graph with vertex set and edge set .    The complement of a simple graph of order is the graph on the same vertices such for each pair of distinct vertices and , is an edge of if and only if it is not an edge of .       Consider the graph . Label the vertices clockwise as , , , and .   Find all induced subgraphs of .    Find a subgraph of that is not an induced subgraph of .         Make up a few examples to explore the concepts of union and complement of graphs.      Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   Any subgraph of a complete graph is also complete.    Any induced subgraph of a complete graph is also complete.    Any subgraph of a bipartite graph is bipartite.       If is a graph and , the neighborhood of , denoted is the set of all vertices in adjacent to at least one member of . Of course, we can consider the neighborhood of a single vertex , which is denoted . A neighborhood of a single vertex does not include itself, and is more specifically the open neighborhood of . It is also possible to define a neighborhood in which itself is also included. This is called the closed neighborhood of , sometimes denoted by . Unless stated otherwise, a neighborhood is assumed to be open.    Make up a few examples of graphs and explore the concept of neighborhood.      Consider the graph with bipartition and , where and .   For , what is ?    What is ?    What is ?       A matching (or independent edge set ) in a graph is a subset of edges without common vertices. That is, a subset of the edges is a matching if each vertex appears as an endpoint in at most one edge of that matching. If is a matching, a vertex is said to be matched if it is an endpoint of one of the edges in . Otherwise, the vertex is called unmatched . We say that  covers a subset if every vertex of is matched by .  We now explore a type of matching problem. Suppose we have a bipartite graph with a bipartition . We want to match up each element with exactly one element that is adjacent to it in and that is not matched to any other element of .  A total matching from to is matching that covers . In other words, for each , there is a unique edge and a unique such that is incident to and . We can think of as specifying an injective function from to . If every vertex in is also matched (i.e., is covered), then the matching is called a perfect matching .  Finding a matching in a bipartite graph can be treated as a network flow problem.    Consider the bipartite graph given below. Is there a total matching from to ? If so, find one. If not, explain why.         Consider the bipartite graph given below. Is there a total matching from to ? If so, find one. If not, explain why.         Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If a bipartite graph has a perfect matching, then is even.    If is a bipartite graph such that is even, then has a perfect matching.       In order for there to be a total matching from to , we need for each . However, that is not enough. Phillip Hall (1904 1982) discovered the following condition, known as Hall's Marriage Theorem , needed for a total matching.   Hall's Marriage Theorem   A bipartite graph with bipartition has a total matching from to if and only if for all subsets . In other words, every subset of must have sufficiently many neighbors in .    Hall actually stated and proved a more general theorem, but we have given its formulation in the context of graph theory.  A graph is called -regular if for every .    The cycle graph is 2-regular, the complete graph is -regular, the hypercube graph is -regular, and the complete bipartite graph is -regular.      Prove that if is a -regular bipartite graph with bipartition , then .      Prove that if is a -regular bipartite graph with , then has a perfect matching.    "
},
{
  "id": "root-1-2-13-2",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph vertices edges "
},
{
  "id": "root-1-2-13-3",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "endpoints "
},
{
  "id": "ex_graph",
  "level": "2",
  "url": "root-1-2-13.html#ex_graph",
  "type": "Example",
  "number": "10.1",
  "title": "",
  "body": "  Here is an example of a graph with vertex set .      "
},
{
  "id": "root-1-2-13-6",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-6",
  "type": "Problem",
  "number": "10.2",
  "title": "",
  "body": "  Find at least five different graphs with vertex sets .   "
},
{
  "id": "root-1-2-13-7",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjacent incident connected loop order degree "
},
{
  "id": "root-1-2-13-8",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-8",
  "type": "Problem",
  "number": "10.3",
  "title": "",
  "body": "  Discuss each of the concepts introduced above in the context of Example .   "
},
{
  "id": "root-1-2-13-9",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete graph cycle graph path wheel graph hypercube "
},
{
  "id": "root-1-2-13-10",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-10",
  "type": "Problem",
  "number": "10.4",
  "title": "",
  "body": "  Draw the first few graphs of each of the graph families above.   "
},
{
  "id": "root-1-2-13-11",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-11",
  "type": "Problem",
  "number": "10.5",
  "title": "",
  "body": "  How many edges do each of the following have?                              "
},
{
  "id": "root-1-2-13-12",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple graph pseudograph multigraph multiple edges "
},
{
  "id": "root-1-2-13-13",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-13",
  "type": "Problem",
  "number": "10.6",
  "title": "",
  "body": "  Draw examples of simple graphs, non-simple graphs, and psuedographs on 3 vertices.   "
},
{
  "id": "root-1-2-13-14",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bipartite bipartition "
},
{
  "id": "root-1-2-13-15",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-15",
  "type": "Problem",
  "number": "10.7",
  "title": "",
  "body": "  Provide an example of a bipartite graph with 5 vertices.   "
},
{
  "id": "root-1-2-13-17",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-17",
  "type": "Theorem",
  "number": "10.8",
  "title": "",
  "body": "  A graph is bipartite if each vertex can be colored with one of two colors so that each pair of adjacent vertices have different colors.   "
},
{
  "id": "root-1-2-13-18",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-18",
  "type": "Problem",
  "number": "10.9",
  "title": "",
  "body": "  Which complete graphs are bipartite?   "
},
{
  "id": "root-1-2-13-19",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-19",
  "type": "Problem",
  "number": "10.10",
  "title": "",
  "body": "  Which path graphs are bipartite?   "
},
{
  "id": "root-1-2-13-20",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-20",
  "type": "Problem",
  "number": "10.11",
  "title": "",
  "body": "  Which cycle graphs are bipartite?   "
},
{
  "id": "root-1-2-13-21",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-21",
  "type": "Problem",
  "number": "10.12",
  "title": "",
  "body": "  Is bipartite?   "
},
{
  "id": "root-1-2-13-22",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete bipartite graph "
},
{
  "id": "root-1-2-13-23",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-23",
  "type": "Problem",
  "number": "10.13",
  "title": "",
  "body": "  Draw , , , , .   "
},
{
  "id": "root-1-2-13-24",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Handshake Lemma "
},
{
  "id": "thm_Handshake",
  "level": "2",
  "url": "root-1-2-13.html#thm_Handshake",
  "type": "Theorem",
  "number": "10.14",
  "title": "Degree Sum Formula.",
  "body": " Degree Sum Formula   In any graph, the sum of the degrees of vertices in the graph is always twice the number of edges. In other words, in a graph , .   "
},
{
  "id": "root-1-2-13-26",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-26",
  "type": "Problem",
  "number": "10.15",
  "title": "",
  "body": "  At a recent party, 9 people greeted each other by shaking hands. Is it possible that each person shook hands with exactly 7 people at the party?   "
},
{
  "id": "root-1-2-13-27",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even vertex odd vertex "
},
{
  "id": "root-1-2-13-28",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-28",
  "type": "Problem",
  "number": "10.16",
  "title": "",
  "body": "  Explain why every graph has an even number of odd vertices.   "
},
{
  "id": "root-1-2-13-29",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree sequence graphic "
},
{
  "id": "root-1-2-13-30",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-30",
  "type": "Problem",
  "number": "10.17",
  "title": "",
  "body": "  Find the degree sequences for ( ), ( ), ( ), ( ), and ( ).   "
},
{
  "id": "root-1-2-13-31",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-31",
  "type": "Problem",
  "number": "10.18",
  "title": "",
  "body": "  Which of the following are graphic sequences?   3332    3331    44332      "
},
{
  "id": "root-1-2-13-32",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-32",
  "type": "Problem",
  "number": "10.19",
  "title": "",
  "body": "  Find two different graphs that have 32222111 as their degree sequence.   "
},
{
  "id": "root-1-2-13-33",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-33",
  "type": "Theorem",
  "number": "10.20",
  "title": "",
  "body": "  If is the degree sequence for a graph of order , then must be even.   "
},
{
  "id": "root-1-2-13-34",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph realization problem "
},
{
  "id": "root-1-2-13-35",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgraph induced subgraph subgraph of induced by union complement "
},
{
  "id": "root-1-2-13-36",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-36",
  "type": "Problem",
  "number": "10.21",
  "title": "",
  "body": "  Consider the graph . Label the vertices clockwise as , , , and .   Find all induced subgraphs of .    Find a subgraph of that is not an induced subgraph of .      "
},
{
  "id": "root-1-2-13-37",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-37",
  "type": "Problem",
  "number": "10.22",
  "title": "",
  "body": "  Make up a few examples to explore the concepts of union and complement of graphs.   "
},
{
  "id": "root-1-2-13-38",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-38",
  "type": "Problem",
  "number": "10.23",
  "title": "",
  "body": "  Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   Any subgraph of a complete graph is also complete.    Any induced subgraph of a complete graph is also complete.    Any subgraph of a bipartite graph is bipartite.      "
},
{
  "id": "root-1-2-13-39",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-39",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "neighborhood open neighborhood closed neighborhood "
},
{
  "id": "root-1-2-13-40",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-40",
  "type": "Problem",
  "number": "10.24",
  "title": "",
  "body": "  Make up a few examples of graphs and explore the concept of neighborhood.   "
},
{
  "id": "root-1-2-13-41",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-41",
  "type": "Problem",
  "number": "10.25",
  "title": "",
  "body": "  Consider the graph with bipartition and , where and .   For , what is ?    What is ?    What is ?      "
},
{
  "id": "root-1-2-13-42",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matching independent edge set matched unmatched covers "
},
{
  "id": "root-1-2-13-44",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-44",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total matching perfect matching "
},
{
  "id": "root-1-2-13-46",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-46",
  "type": "Problem",
  "number": "10.26",
  "title": "",
  "body": "  Consider the bipartite graph given below. Is there a total matching from to ? If so, find one. If not, explain why.      "
},
{
  "id": "root-1-2-13-47",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-47",
  "type": "Problem",
  "number": "10.27",
  "title": "",
  "body": "  Consider the bipartite graph given below. Is there a total matching from to ? If so, find one. If not, explain why.      "
},
{
  "id": "root-1-2-13-48",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-48",
  "type": "Problem",
  "number": "10.28",
  "title": "",
  "body": "  Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If a bipartite graph has a perfect matching, then is even.    If is a bipartite graph such that is even, then has a perfect matching.      "
},
{
  "id": "root-1-2-13-49",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-49",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hall's Marriage Theorem "
},
{
  "id": "root-1-2-13-50",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-50",
  "type": "Theorem",
  "number": "10.29",
  "title": "Hall’s Marriage Theorem.",
  "body": " Hall's Marriage Theorem   A bipartite graph with bipartition has a total matching from to if and only if for all subsets . In other words, every subset of must have sufficiently many neighbors in .   "
},
{
  "id": "root-1-2-13-52",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-regular "
},
{
  "id": "root-1-2-13-53",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-53",
  "type": "Example",
  "number": "10.30",
  "title": "",
  "body": "  The cycle graph is 2-regular, the complete graph is -regular, the hypercube graph is -regular, and the complete bipartite graph is -regular.   "
},
{
  "id": "root-1-2-13-54",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-54",
  "type": "Problem",
  "number": "10.31",
  "title": "",
  "body": "  Prove that if is a -regular bipartite graph with bipartition , then .   "
},
{
  "id": "root-1-2-13-55",
  "level": "2",
  "url": "root-1-2-13.html#root-1-2-13-55",
  "type": "Problem",
  "number": "10.32",
  "title": "",
  "body": "  Prove that if is a -regular bipartite graph with , then has a perfect matching.   "
},
{
  "id": "root-1-2-14",
  "level": "1",
  "url": "root-1-2-14.html",
  "type": "Chapter",
  "number": "11",
  "title": "Additional Graph Theory",
  "body": " Additional Graph Theory  A digraph (or directed graph ) consists of a set of vertices and a set of directed edges (or arrows ), each of which is represented as an ordered pair , where . We say that is the initial vertex and is the terminal vertex of the directed edge . We write as we did with undirected graphs. The indegree of a vertex in a digraph, denoted , is the number of directed edges that have as a terminal vertex while the outdegree of , denoted , is the number of edges having as an initial vertex.    Find the indegree and outdegree of each vertex in the following graph.       As expected, we have the following result that is analogous to the Handshake Lemma ( Theorem ).    If is a digraph, then .    Each graph\/digraph is determined by its vertices and the manner in which they are connected by edges, not the way a graph\/digraph might be sketched. We can represent a graph in a couple of ways.  The adjacency list of a simple graph lists all vertices in one column and all adjacent vertices in second column. For a digraph, the columns contain the initial vertices and the associated terminal vertices.    Make up a couple examples to explore adjacency lists for simple graphs and digraphs.    An  matrix  is a rectangular array of numbers with rows and columns. The entry in the th row and th column is indicated by .    The example below is a matrix:   In this example, .    The adjacency matrix  of a graph (respectively, digraph) with vertices listed as is the matrix whose entry in row and column is the number of edges connecting and (respectively, the number of edges from to ).    Find the adjacency matrix for the following graph.         What properties will the adjacency matrix for a simple graph have?      Sketch a graph that has the following adjacency matrix.       Sketch a digraph that has the following adjacency matrix.       What will the adjacency matrix for look like, assuming the vertices are taken in the natural order (start at one end of the path and end at the other)? What about ? ?    Recall that a graph is not determined by a sketch since many sketches give the same graph. It may be hard to recognize from sketches whether two graphs are essentially the same even though the vertices may be different points. The notion of isomorphism (same form) gives us a way to deal with this. Two simple graphs and are the isomorphic , written , if there is a a bijection such that is an edge in if and only if is an edge in . The function is called an isomorphism . For digraphs, we require that is a directed edge in if and only if is a directed edge in .  For and , to show that :    State a vertex matching explicitly, and    Either    Check adjacency for each pair of vertices in and the corresponding pair in (a total of checks). This could also be as simple as providing sketches for each graph that clearly exhibit the correspondence of vertices and edges.    Demonstrate that the adjacency matrices of and are the same using an ordering that is compatible with the vertex matching.       Warning! The second method above usually involves much less writing, but be aware that the adjacency matrices may differ in one ordering but agree with a different ordering.  The simplest way to show that is to show that a feature preserved under isomorphism (called an invariant ) holds for one graph but not the other. Here are a few isomorphic invariants:   Order of the graph    Number of edges in the graph    Number of vertices of a given degree    Degree sequence    Vertices of degree and are adjacent    Subgraph that is isomorphic to or .       Determine whether the following graphs are isomorphic.                            Let be the graph with vertex set and edge set and let be the following graph.     Determine whether and are isomorphic.      Determine which pairs of the following graphs are isomorphic.                                    Determine whether the following digraphs are isomorphic.                          We now introduce several new terms.   A walk in a graph is an alternating sequence of vertices and edges that starts with a vertex and ends with a vertex such that consecutive vertices in the walk are the endpoints of the edge that separates them. In a simple graph, a walk can be specified by a sequence of vertices.    The length of a walk is the number of edges in the walk.    If the initial and terminal vertices of a walk are the same, then the walk is a closed walk .    A trail is a walk with distinct edges (no repeated edges).    A circuit is a closed trail, that is, a closed walk with no repeated edges.    A path is a walk with distinct vertices. This is a subgraph isomorphic to for some .    A cycle is a closed walk with distinct vertices except the initial and terminal vertices. This corresponds to a subgraph isomorphic to for some .    A graph is connected if for each pair of distinct vertices and , there is a walk from to . A component of a graph is a connected subgraph that is not contained in a larger connected subgraph.    A cut vertex of a connected graph is a vertex which when removed along with all incident edges results in a disconnected graph.    A bridge (or cut edge ) is an edge of a connected graph which when removed results in a disconnected graph.     The following theorem likely does not come as a surprise.    A graph is connected if and only if for each pair of distinct vertices and , there is a path from to .    A digraph is strongly connected if for each pair of distinct vertices and there is a (directed) walk from to . A digraph is weakly connected if the underlying undirected graph in which the direction of edges is removed is connected. Note that a strongly connected digraph will always be weakly connected. A strongly connected component of a digraph is a maximal strongly connected subgraph.  We now introduce a couple of important circuits that a graph may or may not possess. An Euler circuit in a graph is a circuit that contains every edge of the graph. An Euler trail in a graph is a trail that contains every edge of the graph. Note that an Euler circuit is also an Euler trail as well.    Determine whether each of the following graphs has an Euler trail. How about an Euler circuit?                                    If is a connected graph of order , then has an Euler circuit if and only if every vertex is even.      If is a connected graph of order , then has an Euler trail that is not a circuit if and only if has exactly two odd vertices.    Edges can be added to a connected graph in order to cause it to have an Euler circuit (or trail). In particular, an Eulerization of a connected graph is the addition of suitable multiple edges (i.e., duplicate existing edges) to permit an Euler circuit, mimicking what must be done to complete a circuit such as a postal route or other delivery\/pick-up route.    Eulerize the following graph.       A cycle in a graph that passes through every vertex is a Hamilton cycle . This is often called a Hamilton circuit . A Hamilton path is a path in a graph that includes every vertex.    Determine whether each of the following graphs has a Hamilton circuit or a Hamilton path that is not a circuit.                          Unfortunately, unlike the situation for Euler circuits, there is no known simple necessary and sufficient condition for a Hamilton cycle to exist in a graph. We can state some simple cases when one cannot exist, and there are some theorems for the existence of a Hamilton cycle, but these do not cover all possibilities.   Dirac's Theorem   If is a simple graph of order in which for each vertex, then has a Hamilton cycle.     Ore's Theorem   If is a simple graph of order in which for each pair of vertices and , then has a Hamilton cycle.      How many distinct Hamilton cycles does have that start\/end at a fixed vertex?    We now turn our attention to trees. A tree is a connected graph that has no cycles. A forest is a graph in which every connected component is a tree. Trees provide a useful structure for organizing data, for displaying organization, and for decision processes.    Is every tree necessarily a simple graph?      A graph is a tree if and only if for each pair of distinct vertices and , there is a unique path from to .      Some properties of trees.   A tree of order 2 or more has at least two vertices of degree 1.    Every edge of a tree is a bridge.    A connected graph in which every edge is a bridge is a tree.    A tree of order has edges.    A connected graph of order with edges is a tree.       A spanning tree of a simple graph is a subgraph of such that is a tree contains every vertex of .    Find a spanning tree for each of the following.                            Do you think every connected simple graph contains a spanning tree?    In fact, we have the following theorem.    A simple graph is connected if and only if it contains a spanning tree.    Below, we provide informal descriptions of the depth-first and breadth-first algorithms for identifying a spanning tree in a connected simple graph with vertices ordered as .   Depth-First Search. Initialize: , . As long as does not contain all vertices, do the following:   Choose the first vertex in the ordered list that is adjacent to and is not yet in . If there are no vertices adjacent to that are not yet in , return to the most recently added previous vertex and let and repeat this step with the revised .    Add and edge to .    Set .     Repeat the steps above (with revised 's) as often as needed.   Breadth-First Search. Initialize: , . As long as does not contain all vertices, do the following.    Put the first vertex in .    Remove that vertex from . (On paper, just mark out.)    For all vertices adjacent to not yet in ,    If is the first vertex in order that is adjacent to and not yet in , add and edge to and put at the end of list .    Repeat until all vertices adjacent to not yet in have been examined.      Repeat the above steps as needed.  A weighted graph is a graph with a positive numerical values assigned to each edge of the graph. A minimal spanning tree of a connected weighted graph is a spanning tree that has the smallest possible sum of weights for its edges.  Minimal spanning trees arose in the practical matter of designing an efficient electrical network, and the concept applies to similar network notions in many areas such as transportation, utilities, and others. We will discuss one early, elementary, and effective algorithms for finding a minimal spanning tree in a connected undirected weighted graph.   Prim's Algorithm (Jarnik 1930, Prim 1957). Assume is a connected, undirected, weighted loopless graph of order .   Initialize a tree with a single vertex, chosen arbitrarily from the graph.    Grow the tree by one edge: Of the edges that connect the tree to vertices not yet in the tree, find a minimum-weight edge, and transfer it to the tree.    Repeat step 2 (until all vertices are in the tree).     Prim's Algorithm is an example of a greedy algorithm.    Make up an example of a connected, undirected, weighted loopless graph and find a minimal spanning tree.    "
},
{
  "id": "root-1-2-14-2",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "digraph directed graph directed edges arrows initial vertex terminal vertex indegree outdegree "
},
{
  "id": "root-1-2-14-3",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-3",
  "type": "Problem",
  "number": "11.1",
  "title": "",
  "body": "  Find the indegree and outdegree of each vertex in the following graph.      "
},
{
  "id": "root-1-2-14-5",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-5",
  "type": "Theorem",
  "number": "11.2",
  "title": "",
  "body": "  If is a digraph, then .   "
},
{
  "id": "root-1-2-14-7",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjacency list "
},
{
  "id": "root-1-2-14-8",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-8",
  "type": "Problem",
  "number": "11.3",
  "title": "",
  "body": "  Make up a couple examples to explore adjacency lists for simple graphs and digraphs.   "
},
{
  "id": "root-1-2-14-9",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix "
},
{
  "id": "root-1-2-14-10",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-10",
  "type": "Example",
  "number": "11.4",
  "title": "",
  "body": "  The example below is a matrix:   In this example, .   "
},
{
  "id": "root-1-2-14-11",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjacency matrix "
},
{
  "id": "root-1-2-14-12",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-12",
  "type": "Problem",
  "number": "11.5",
  "title": "",
  "body": "  Find the adjacency matrix for the following graph.      "
},
{
  "id": "root-1-2-14-13",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-13",
  "type": "Problem",
  "number": "11.6",
  "title": "",
  "body": "  What properties will the adjacency matrix for a simple graph have?   "
},
{
  "id": "root-1-2-14-14",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-14",
  "type": "Problem",
  "number": "11.7",
  "title": "",
  "body": "  Sketch a graph that has the following adjacency matrix.    "
},
{
  "id": "root-1-2-14-15",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-15",
  "type": "Problem",
  "number": "11.8",
  "title": "",
  "body": "  Sketch a digraph that has the following adjacency matrix.    "
},
{
  "id": "root-1-2-14-16",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-16",
  "type": "Problem",
  "number": "11.9",
  "title": "",
  "body": "  What will the adjacency matrix for look like, assuming the vertices are taken in the natural order (start at one end of the path and end at the other)? What about ? ?   "
},
{
  "id": "root-1-2-14-17",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isomorphic isomorphism "
},
{
  "id": "root-1-2-14-21",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invariant "
},
{
  "id": "root-1-2-14-22",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-22",
  "type": "Problem",
  "number": "11.10",
  "title": "",
  "body": "  Determine whether the following graphs are isomorphic.                         "
},
{
  "id": "root-1-2-14-23",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-23",
  "type": "Problem",
  "number": "11.11",
  "title": "",
  "body": "  Let be the graph with vertex set and edge set and let be the following graph.     Determine whether and are isomorphic.   "
},
{
  "id": "root-1-2-14-24",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-24",
  "type": "Problem",
  "number": "11.12",
  "title": "",
  "body": "  Determine which pairs of the following graphs are isomorphic.                                 "
},
{
  "id": "root-1-2-14-25",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-25",
  "type": "Problem",
  "number": "11.13",
  "title": "",
  "body": "  Determine whether the following digraphs are isomorphic.                         "
},
{
  "id": "root-1-2-14-26",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "walk length closed walk trail circuit path cycle connected component cut vertex bridge cut edge "
},
{
  "id": "root-1-2-14-28",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-28",
  "type": "Theorem",
  "number": "11.14",
  "title": "",
  "body": "  A graph is connected if and only if for each pair of distinct vertices and , there is a path from to .   "
},
{
  "id": "root-1-2-14-29",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strongly connected weakly connected strongly connected component "
},
{
  "id": "root-1-2-14-30",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler circuit Euler trail "
},
{
  "id": "root-1-2-14-31",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-31",
  "type": "Problem",
  "number": "11.15",
  "title": "",
  "body": "  Determine whether each of the following graphs has an Euler trail. How about an Euler circuit?                                 "
},
{
  "id": "root-1-2-14-32",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-32",
  "type": "Theorem",
  "number": "11.16",
  "title": "",
  "body": "  If is a connected graph of order , then has an Euler circuit if and only if every vertex is even.   "
},
{
  "id": "root-1-2-14-33",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-33",
  "type": "Corollary",
  "number": "11.17",
  "title": "",
  "body": "  If is a connected graph of order , then has an Euler trail that is not a circuit if and only if has exactly two odd vertices.   "
},
{
  "id": "root-1-2-14-34",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Eulerization "
},
{
  "id": "root-1-2-14-35",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-35",
  "type": "Problem",
  "number": "11.18",
  "title": "",
  "body": "  Eulerize the following graph.      "
},
{
  "id": "root-1-2-14-36",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-36",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hamilton cycle Hamilton circuit Hamilton path "
},
{
  "id": "root-1-2-14-37",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-37",
  "type": "Problem",
  "number": "11.19",
  "title": "",
  "body": "  Determine whether each of the following graphs has a Hamilton circuit or a Hamilton path that is not a circuit.                         "
},
{
  "id": "root-1-2-14-39",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-39",
  "type": "Theorem",
  "number": "11.20",
  "title": "Dirac’s Theorem.",
  "body": " Dirac's Theorem   If is a simple graph of order in which for each vertex, then has a Hamilton cycle.   "
},
{
  "id": "root-1-2-14-40",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-40",
  "type": "Theorem",
  "number": "11.21",
  "title": "Ore’s Theorem.",
  "body": " Ore's Theorem   If is a simple graph of order in which for each pair of vertices and , then has a Hamilton cycle.   "
},
{
  "id": "root-1-2-14-41",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-41",
  "type": "Problem",
  "number": "11.22",
  "title": "",
  "body": "  How many distinct Hamilton cycles does have that start\/end at a fixed vertex?   "
},
{
  "id": "root-1-2-14-42",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tree forest "
},
{
  "id": "root-1-2-14-43",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-43",
  "type": "Problem",
  "number": "11.23",
  "title": "",
  "body": "  Is every tree necessarily a simple graph?   "
},
{
  "id": "root-1-2-14-44",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-44",
  "type": "Theorem",
  "number": "11.24",
  "title": "",
  "body": "  A graph is a tree if and only if for each pair of distinct vertices and , there is a unique path from to .   "
},
{
  "id": "root-1-2-14-45",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-45",
  "type": "Theorem",
  "number": "11.25",
  "title": "",
  "body": "  Some properties of trees.   A tree of order 2 or more has at least two vertices of degree 1.    Every edge of a tree is a bridge.    A connected graph in which every edge is a bridge is a tree.    A tree of order has edges.    A connected graph of order with edges is a tree.      "
},
{
  "id": "root-1-2-14-46",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning tree "
},
{
  "id": "root-1-2-14-47",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-47",
  "type": "Problem",
  "number": "11.26",
  "title": "",
  "body": "  Find a spanning tree for each of the following.                         "
},
{
  "id": "root-1-2-14-48",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-48",
  "type": "Problem",
  "number": "11.27",
  "title": "",
  "body": "  Do you think every connected simple graph contains a spanning tree?   "
},
{
  "id": "root-1-2-14-50",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-50",
  "type": "Theorem",
  "number": "11.28",
  "title": "",
  "body": "  A simple graph is connected if and only if it contains a spanning tree.   "
},
{
  "id": "root-1-2-14-52",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Depth-First Search. "
},
{
  "id": "root-1-2-14-54",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Breadth-First Search. "
},
{
  "id": "root-1-2-14-57",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-57",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted graph minimal spanning tree "
},
{
  "id": "root-1-2-14-59",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-59",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Prim's Algorithm "
},
{
  "id": "root-1-2-14-61",
  "level": "2",
  "url": "root-1-2-14.html#root-1-2-14-61",
  "type": "Problem",
  "number": "11.29",
  "title": "",
  "body": "  Make up an example of a connected, undirected, weighted loopless graph and find a minimal spanning tree.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
