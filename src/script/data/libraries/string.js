/*
    Helper String Functions (copied from cstyle.js to be reused by other indenters)
    SPDX-FileCopyrightText: Dominik Haumann <dhdev@gmx.de>
    SPDX-FileCopyrightText: Milian Wolff <mail@milianw.de>
    SPDX-FileCopyrightText: Gerald Senarclens de Grancy <oss@senarclens.eu>

    SPDX-License-Identifier: LGPL-2.0-only
*/

//BEGIN String functions
/**
 * \brief Returns \c string without leading spaces.
 */
String.prototype.ltrim = function()
{
    var i = 0;
    for ( ; i < this.length && (this[i] == ' ' || this[i] == '\t'); ++i ) {
        // continue
    }
    return this.substr(i);
}

/**
 * \brief Returns \c string without trailing spaces.
 */
String.prototype.rtrim = function()
{
    if ( this.length == 0 ) {
        return "";
    }
    var i = this.length - 1;
    for ( ; i >= 0 && (this[i] == ' ' || this[i] == '\t'); --i ) {
        // continue
    }
    return this.substr(0, i + 1);
}

/**
 * \brief Returns \c string without leading and trailing spaces.
 */
String.prototype.trim = function()
{
    return this.rtrim().ltrim();
}

/**
 * \brief Fills with \c size \c char's.
 * \return the string itself (for chain calls)
 */
String.prototype.fill = function(char, size)
{
    var string = "";
    for ( var i = 0; i < size; ++i ) {
        string += char;
    }
    return string;
}

/**
 * \brief Check if \c this string ends with a given.
 * \returns \c true when string ends with \c needle, \c false otherwise.
 */
String.prototype.endsWith = function(needle)
{
    return this.substr(- needle.length) == needle;
}

/**
 * \brief Check if \c this string starts with a given.
 * \return \c true when string starts with \c needle, \c false otherwise.
 */
String.prototype.startsWith = function(needle)
{
    return this.substr(0, needle.length) == needle;
}

/**
 * \return \c true when \c needle is contained in \c this string, \c false otherwise.
 */
String.prototype.contains = function(needle)
{
    return this.indexOf(needle) !== -1;
}

/**
 * \return number of occurrences of \c needle in \c this string
 * \c needle can be either a string of regular expression
 */
String.prototype.countMatches = function(needle)
{
    if (typeof needle === 'string')
        return this.split(needle).length - 1;
    // the correct type of regular expression in ECMAScript is 'object', but
    // qtscript seems to use 'function' instead
    else if (typeof needle === 'object' || typeof needle === 'function')
        return this.match(needle) ? this.match(RegExp(needle.source, 'g')).length : 0;
}

//END String functions
