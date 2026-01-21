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
  "body": " Sets and Counting Principles  A set is a collection of objects called elements . Typically, braces are used to denote sets as in , which is the same set as , and the same as . If is a set and is an element of , we write . Otherwise, we write . For example, while . The set containing no elements is called the empty set , and is denoted by the symbol , but can also be written as . Any set that contains at least one element is referred to as a nonempty set . If we think of a set as a box potentially containing some stuff, then the empty set is a box with nothing in it.  The empty set and the set are examples of finite sets . Any set that is not finite is an infinite set . For example, the natural numbers defined by and integers defined by are both examples of infinite sets. Some books will include zero in the set of natural numbers, but we do not. Since the set of natural numbers consists of the positive integers, the natural numbers are sometimes denoted by . The real numbers , denoted by , is another example of an infinite set. If you look closely at our definitions for the natural numbers and integers you will notice that we wrote instead of . We use to mean that the symbol or expression on the left is defined to be equal to the expression on the right.  The language associated to sets is specific. We will often define sets using the following notation, called set-builder notation : , where is some predicate statement involving . The first part denotes what type of is being considered. The predicate to the right of the vertical bar determines the condition(s) that each must satisfy in order to be a member of the set. This notation is read as The set of all in such that .     The set describes the collection of even natural numbers that are greater than or equal to 8.      We can define the rational numbers using set-builder notation via .      Write the set of perfect squares using set-builder notation.      Translate the following set defined with set-builder notation in English and list a few of its elements: .    The cardinality of a set , denoted by , is the number of elements in . For example, if , then . We will mostly concern ourselves with the cardinality of finite sets in this book. Cardinality gets wildly more complicated if we consider infinite sets.  If and are sets, then we say that is a subset of , written , provided that every element of is an element of .    We have .      Let be a set. Determine whether each of the following statements is true or false. If a statement is true, explain why. If a statement is false, provide a specific counterexample.    .     .         Consider the set . How many subsets does have?     Transitivity of Subsets   Suppose that , , and are sets. If and , then .    Note that two sets and are equal , denoted , if the sets contain the same elements. It's clear that if and only if and . If , then is called a proper subset provided that . In this case, we may write or . Some authors use to mean , so some confusion could arise if you are not reading carefully.  Sometimes it is useful to fix a set to focus our attention on. The term universe of discourse (or domain of discourse ) generally refers to the collection of objects being discussed in a specific context.  Let and be sets in some universe of discourse . We define the following.   The union of and is .    The intersection of and is .    If and have the property that , then we say that and are disjoint .    The set difference (relative to ) of the sets and is .    The complement (relative to ) of is the set .       Suppose that the universe of discourse is . Let , , and . Find each of the following and then determine the cardinality of the set.                                                      Is any pair of the original sets , , and disjoint?    The next theorem should be clear.    If is a subset of some universe of discourse , then    ;     (i.e., and are disjoint).       The following principle is a natural notion.   Sum Principle for Disjoint Sets   If and are disjoint sets, then   More generally, if are pairwise disjoint sets, then       A domino is a rectangular tile, usually with a line dividing its face into two square ends, and each end is marked with a number of dots (also called pips) or is blank. Figure shows a few examples of dominoes. The first and second domino in the figure are actually the same domino since orientation of the domino is irrelevant! When tackling the problems below, consider handling disjoint cases. If you visualize the various cases, you may end up with a nice staircase-looking arrangement.   How many dominoes are there in a set that includes double blank through double nine?    How many dominoes are there in a set that includes double blank through double twelve?    How many dominoes are there in a set that includes double blank through double ?        Examples of dominoes. \\domino{2}{4} \\domino{4}{2} \\domino{5}{5} \\domino{3}{0}    How many students are enrolled in MAT 136 or MAT 226 (or both) if there are 409 in MAT 136 and 156 in MAT 226? Do you need to know that 40 students are in both courses?    The previous problems gives us an indication of how to generalize the Sum Principle ( Theorem ) to the case when the sets are not disjoint.   General Sum Principle   If and are sets, then or equivalently       I'm in the mood for a cup of coffee! Let's say that the nearest place to get a cup of coffee is four blocks East and three blocks North. Assuming I only walk East or North, how many different routes can I take to get there if:   The last block I walk is heading North?    The last block I walk is heading East?    I don't care whether the last block I walk is North or East?       In Problem , we could describe paths to the coffee shop using expressions like , where we interpret the expression from left to right as instruction for which direction to walk at each step. Such expressions have a name. A string of objects of length  is a linearly ordered arrangements of objects. The objects in a string may be repeated unless specified otherwise. For example, is a string of length 7 consisting of 's and 's. If a string consists of letters, then it may be called a word (we do not require a word to be in the dictionary!). A bit string is a string consisting of 0's and 1's. Each occurrence of a 0 or 1 in a bit string is called a bit . The strings and are two different bit strings of length 3.    How many two-letter words are there using only the letters , , , ?    We can easily list these, but a different arrangement will illustrate a more powerful technique.           \\noalign{\\hrule height 2pt}                                                        The rectangular table makes it clear that there are 16 two-letter words using the letters , , , and . Another way to see this is to note that there are 4 choices for the first (left-hand) letter and for each of these there are 4 choices for the right-hand letter, so there are words total.      How many numbered words are there consisting of two letters from , , , and , followed by one of the digits 1, 2, 3, 4, and 5?    A geometric display as in Example would seem to require three dimensions, but we can take what we already know and just add a digit to the right:     1  2  3  4  5    \\noalign{\\hrule height 2pt}                                                               There are 16 rows (each with a word from Example ) and five columns, so there are two-letter words using , , , and , followed by a digit from 1, 2, 3, 4, and 5.    If and are sets, the Cartesian product of and , denoted (read as times or cross ), is the set of all ordered pairs where the first component is from and the second component is from . In set-builder notation, we have .  Similarly, the Cartesian product of sets sets is the collection of -tuples given by , where is referred to as the th factor of the Cartesian product. As a special case, the set is often abbreviated as .  Cartesian products are named after French philosopher and mathematician René Descartes (1596 1650).    If and , then .      The standard two-dimensional plane and standard three space are familiar examples of Cartesian products. In particular, we have and .      Consider the sets and from Example .   Find .    Find .         Let , , and . Find .      If is a set, then what is equal to?      If and are both finite sets, find a nice formula for .      Are collections of words or strings that we encountered earlier in the chapter just Cartesian products in disguise? Explain.      Is a set of dominoes a Cartesian product in disguise? Explain.    We have been dancing around a fundamental counting principle. Let's state it officially. There are three progressively more general versions, the first of which we already encountered in Problem . The second version officially follows from the first version by induction, which is a topic we will encounter later. The third version follows from the second by making a careful use of notation to identify the set with a Cartesian product.   Product Principle   Each of the following are referred to as the Product Principle .   If and are finite sets, then     If are finite sets, then     If is the set of outcomes for a -step process, where for , there are choices for step , no matter what earlier choices were made, then        The key difference between versions (b) and (c) of the Product Principle is that version (c) does not assume that the set of choices for step is independent of the previous choices.    A fashion-challenged freshman has three pair of pants, five shirts (all t-shirts, but different patterns) and a pair of sandals. How many different ensembles are available for this freshman?      Suppose you flip a coin fives times in a row, recording the sequence of heads and tails that you see. How many different sequences of flips are possible?      Suppose we roll a six-sided die and then flip a coin. How many distinct outcomes are possible?      How many bit strings of length are there? How many of these start and end with the bit 1?      How many subsets does a set with elements have? Make sure you are taking the case into account. You should be able to carefully justify your answer by cleverly utilizing the Product Principle.      How many four-letter words are there using lower-case English letter consonants (including ) that include exactly one occurrence of ?      A pass code consists of a string of two or three case-sensitive English letters followed by three digits (i.e., ). How many different possible pass codes are there?    So far we have encountered the following fundamental methods for determining the cardinality of a set:   Systematic brute-force (with good bookkeeping);     Sum Principle: If there are multiple disjoint cases, we can add up the sizes of the various cases. If you can phrase a problem with or , you should consider adding cases.     Product Principle: If all the elements\/outcomes can be constructed using a step-by-step process, you should multiply the number of ways each step in process can occur. Be on the look out for the keywords and or then .     The next result is simply a special case of Theorem . Sometimes it might be easier to count the opposite of what you are looking to count and then to subtract from the size of the universe of discourse. This idea is sometimes referred to as the Subtraction Principle . Keep this in mind as a method of attack for future problems.   Subtraction Principle   If is a subset of a universe of discourse , then , or equivalently, .      How many words of length 4 are there consisting of lower-case English letters that utilize at least two x's? Find the answer in two different ways.      How many words of length 6 are there consisting of lower-case English letters subject to the following constraints?   No constraints.    Repetition not allowed.    No instances of letter .    At least one occurrence of letter .         Six friends sit on one side of long rectangular table.   How many seating arrangements are there?    How many seating arrangements are there if Sally and Maria always sit next to each other?       The next principle, called the Division Principle , provides a method for ignoring unimportant differences when counting things. Loosely speaking, the general idea is count a larger set of distinct objects and then use the Division Principle to merge the ones that are not significantly different from each other. As a motivating example, suppose my kids have 30 toys scattered around the room. After asking my kids to pick up all the toys and put each toy in a bin according to what type of toy it is (e.g., Transformer), there ends up being 6 toys in each bin. In this case, it is easy to see that there must be 5 distinct bins.   Division Principle   If the finite set is the union of pairwise disjoint subsets each with elements, then . Equivalently, .      Six friends sit around a circle to play a game. Rotations of the group do not constitute different seating orders.   How many circular seating arrangements are there?    How many circular seating arrangements are there if Sally and Maria always sit next to each other?         How many ways can the letters of the word SLOPPY be arranged?      It's Halloween and five students arrive at my office begging for candy. I happen to have five pieces of candy. Depending on my mood, I may give away none of the candy, all of the candy, or any amount in between. Assuming I don't give any student more than one piece of candy, how many different ways can I distribute the candy? Does it matter if the pieces of candy are identical or not? If so, count both situations.    "
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
  "number": "1.13",
  "title": "",
  "body": " Examples of dominoes. \\domino{2}{4} \\domino{4}{2} \\domino{5}{5} \\domino{3}{0} "
},
{
  "id": "root-1-2-4-25",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-25",
  "type": "Problem",
  "number": "1.14",
  "title": "",
  "body": "  How many students are enrolled in MAT 136 or MAT 226 (or both) if there are 409 in MAT 136 and 156 in MAT 226? Do you need to know that 40 students are in both courses?   "
},
{
  "id": "thm_General_Sum_Principle",
  "level": "2",
  "url": "root-1-2-4.html#thm_General_Sum_Principle",
  "type": "Theorem",
  "number": "1.15",
  "title": "General Sum Principle.",
  "body": " General Sum Principle   If and are sets, then or equivalently    "
},
{
  "id": "prob_coffee",
  "level": "2",
  "url": "root-1-2-4.html#prob_coffee",
  "type": "Problem",
  "number": "1.16",
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
  "number": "1.17",
  "title": "",
  "body": "  How many two-letter words are there using only the letters , , , ?    We can easily list these, but a different arrangement will illustrate a more powerful technique.           \\noalign{\\hrule height 2pt}                                                        The rectangular table makes it clear that there are 16 two-letter words using the letters , , , and . Another way to see this is to note that there are 4 choices for the first (left-hand) letter and for each of these there are 4 choices for the right-hand letter, so there are words total.   "
},
{
  "id": "root-1-2-4-31",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-31",
  "type": "Example",
  "number": "1.18",
  "title": "",
  "body": "  How many numbered words are there consisting of two letters from , , , and , followed by one of the digits 1, 2, 3, 4, and 5?    A geometric display as in Example would seem to require three dimensions, but we can take what we already know and just add a digit to the right:     1  2  3  4  5    \\noalign{\\hrule height 2pt}                                                               There are 16 rows (each with a word from Example ) and five columns, so there are two-letter words using , , , and , followed by a digit from 1, 2, 3, 4, and 5.   "
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
  "number": "1.19",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "root-1-2-4-36",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-36",
  "type": "Example",
  "number": "1.20",
  "title": "",
  "body": "  The standard two-dimensional plane and standard three space are familiar examples of Cartesian products. In particular, we have and .   "
},
{
  "id": "root-1-2-4-37",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-37",
  "type": "Problem",
  "number": "1.21",
  "title": "",
  "body": "  Consider the sets and from Example .   Find .    Find .      "
},
{
  "id": "root-1-2-4-38",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-38",
  "type": "Problem",
  "number": "1.22",
  "title": "",
  "body": "  Let , , and . Find .   "
},
{
  "id": "root-1-2-4-39",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-39",
  "type": "Problem",
  "number": "1.23",
  "title": "",
  "body": "  If is a set, then what is equal to?   "
},
{
  "id": "prob_cardinality_of_product",
  "level": "2",
  "url": "root-1-2-4.html#prob_cardinality_of_product",
  "type": "Problem",
  "number": "1.24",
  "title": "",
  "body": "  If and are both finite sets, find a nice formula for .   "
},
{
  "id": "root-1-2-4-41",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-41",
  "type": "Problem",
  "number": "1.25",
  "title": "",
  "body": "  Are collections of words or strings that we encountered earlier in the chapter just Cartesian products in disguise? Explain.   "
},
{
  "id": "root-1-2-4-42",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-42",
  "type": "Problem",
  "number": "1.26",
  "title": "",
  "body": "  Is a set of dominoes a Cartesian product in disguise? Explain.   "
},
{
  "id": "root-1-2-4-44",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-44",
  "type": "Theorem",
  "number": "1.27",
  "title": "Product Principle.",
  "body": " Product Principle   Each of the following are referred to as the Product Principle .   If and are finite sets, then     If are finite sets, then     If is the set of outcomes for a -step process, where for , there are choices for step , no matter what earlier choices were made, then       "
},
{
  "id": "root-1-2-4-46",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-46",
  "type": "Problem",
  "number": "1.28",
  "title": "",
  "body": "  A fashion-challenged freshman has three pair of pants, five shirts (all t-shirts, but different patterns) and a pair of sandals. How many different ensembles are available for this freshman?   "
},
{
  "id": "prob_coin_flips",
  "level": "2",
  "url": "root-1-2-4.html#prob_coin_flips",
  "type": "Problem",
  "number": "1.29",
  "title": "",
  "body": "  Suppose you flip a coin fives times in a row, recording the sequence of heads and tails that you see. How many different sequences of flips are possible?   "
},
{
  "id": "root-1-2-4-48",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-48",
  "type": "Problem",
  "number": "1.30",
  "title": "",
  "body": "  Suppose we roll a six-sided die and then flip a coin. How many distinct outcomes are possible?   "
},
{
  "id": "prob_bit_strings",
  "level": "2",
  "url": "root-1-2-4.html#prob_bit_strings",
  "type": "Problem",
  "number": "1.31",
  "title": "",
  "body": "  How many bit strings of length are there? How many of these start and end with the bit 1?   "
},
{
  "id": "prob_number_of_subsets",
  "level": "2",
  "url": "root-1-2-4.html#prob_number_of_subsets",
  "type": "Problem",
  "number": "1.32",
  "title": "",
  "body": "  How many subsets does a set with elements have? Make sure you are taking the case into account. You should be able to carefully justify your answer by cleverly utilizing the Product Principle.   "
},
{
  "id": "root-1-2-4-51",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-51",
  "type": "Problem",
  "number": "1.33",
  "title": "",
  "body": "  How many four-letter words are there using lower-case English letter consonants (including ) that include exactly one occurrence of ?   "
},
{
  "id": "root-1-2-4-52",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-52",
  "type": "Problem",
  "number": "1.34",
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
  "number": "1.35",
  "title": "Subtraction Principle.",
  "body": " Subtraction Principle   If is a subset of a universe of discourse , then , or equivalently, .   "
},
{
  "id": "root-1-2-4-56",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-56",
  "type": "Problem",
  "number": "1.36",
  "title": "",
  "body": "  How many words of length 4 are there consisting of lower-case English letters that utilize at least two x's? Find the answer in two different ways.   "
},
{
  "id": "root-1-2-4-57",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-57",
  "type": "Problem",
  "number": "1.37",
  "title": "",
  "body": "  How many words of length 6 are there consisting of lower-case English letters subject to the following constraints?   No constraints.    Repetition not allowed.    No instances of letter .    At least one occurrence of letter .      "
},
{
  "id": "root-1-2-4-58",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-58",
  "type": "Problem",
  "number": "1.38",
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
  "number": "1.39",
  "title": "Division Principle.",
  "body": " Division Principle   If the finite set is the union of pairwise disjoint subsets each with elements, then . Equivalently, .   "
},
{
  "id": "prop_circular_table",
  "level": "2",
  "url": "root-1-2-4.html#prop_circular_table",
  "type": "Problem",
  "number": "1.40",
  "title": "",
  "body": "  Six friends sit around a circle to play a game. Rotations of the group do not constitute different seating orders.   How many circular seating arrangements are there?    How many circular seating arrangements are there if Sally and Maria always sit next to each other?      "
},
{
  "id": "root-1-2-4-62",
  "level": "2",
  "url": "root-1-2-4.html#root-1-2-4-62",
  "type": "Problem",
  "number": "1.41",
  "title": "",
  "body": "  How many ways can the letters of the word SLOPPY be arranged?   "
},
{
  "id": "prob_candy",
  "level": "2",
  "url": "root-1-2-4.html#prob_candy",
  "type": "Problem",
  "number": "1.42",
  "title": "",
  "body": "  It's Halloween and five students arrive at my office begging for candy. I happen to have five pieces of candy. Depending on my mood, I may give away none of the candy, all of the candy, or any amount in between. Assuming I don't give any student more than one piece of candy, how many different ways can I distribute the candy? Does it matter if the pieces of candy are identical or not? If so, count both situations.   "
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
