let contIconSearch = document.getElementById('contIconSearch')
let SearchBox = document.getElementById('SearchBox')

let buttonsCont = document.getElementById('buttonsCont')


let count = 0
let back = 1927
let next = 1928

let btnN = document.getElementById('next')
let btnB = document.getElementById('prev')

/* BOTONES */
let Buscar = document.getElementById('Buscar')
let volver = document.getElementById('volver')

Buscar.addEventListener('click', () => {

    contIconSearch.classList.toggle('hiddenButton')
    SearchBox.classList.toggle('hiddenSearch')



})

volver.addEventListener('click', () => {
    setTimeout(() => {
        lentDarkT.classList.toggle('lentDarkT')
        lentDarkT.classList.toggle('lentDarkTexit')

        setTimeout(() => {
            containerTempo.classList.toggle('none')
            containerTempo.classList.toggle('containerTempo')

            contIconSearch.classList.toggle('contIconSearch')
            Buscar.classList.toggle('glow-on-hoverB')
            volver.classList.toggle('glow-on-hoverV')
            SearchBox.classList.toggle('SearchBox')

        }, 500);

    }, 100);
    setTimeout(() => {
        window.location.assign('/pages/languageESin.html')
    }, 2000);
})

/*avanzar y retroceder en linea del tiempo*/

contIconSearch.addEventListener('click', () => {

    if (SearchBox.value == 1928 && back == 1927 && next == 1928) {

        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1929 && next == 1930) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1930 && next == 1931) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1931 && next == 1932) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1932 && next == 1933) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1933 && next == 1934) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1934 && next == 1935) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1935 && next == 1936) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1936 && next == 1937) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1937 && next == 1938) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1938 && next == 1939) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1939 && next == 1940) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1928 && back == 1940 && next == 1941) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1941 && next == 1942) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1942 && next == 1943) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1943 && next == 1944) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1944 && next == 1945) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1945 && next == 1946) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1946 && next == 1947) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1947 && next == 1948) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1948 && next == 1949) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1949 && next == 1950) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1950 && next == 1951) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1951 && next == 1952) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1952 && next == 1953) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1953 && next == 1954) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1954 && next == 1955) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1955 && next == 1956) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1956 && next == 1957) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1957 && next == 1958) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1958 && next == 1959) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1959 && next == 1960) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1960 && next == 1961) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1961 && next == 1962) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1962 && next == 1963) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1963 && next == 1964) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1964 && next == 1965) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1965 && next == 1966) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1928 && back == 1966 && next == 1967) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1967 && next == 1968) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1968 && next == 1969) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1969 && next == 1970) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1970 && next == 1971) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1971 && next == 1972) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1972 && next == 1973) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1973 && next == 1974) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1974 && next == 1975) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1975 && next == 1976) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1976 && next == 1977) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1977 && next == 1978) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1978 && next == 1979) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1979 && next == 1980) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1980 && next == 1981) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1981 && next == 1982) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1982 && next == 1983) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1983 && next == 1984) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1984 && next == 1985) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1985 && next == 1986) {
        for (let i = 0; i < 57; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1986 && next == 1987) {
        for (let i = 0; i < 58; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1987 && next == 1988) {
        for (let i = 0; i < 59; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1988 && next == 1989) {
        for (let i = 0; i < 60; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1989 && next == 1990) {
        for (let i = 0; i < 61; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1928 && back == 1990 && next == 1991) {
        for (let i = 0; i < 62; i++) {

            setTimeout(prev, i * 100)

        }
    }

    //===================1929====================

    if (SearchBox.value == 1929 && back == 1927 && next == 1928) {

        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1928 && next == 1929) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1930 && next == 1931) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1931 && next == 1932) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1932 && next == 1933) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1933 && next == 1934) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1934 && next == 1935) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1935 && next == 1936) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1936 && next == 1937) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1937 && next == 1938) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1938 && next == 1939) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1939 && next == 1940) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1929 && back == 1940 && next == 1941) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1941 && next == 1942) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1942 && next == 1943) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1943 && next == 1944) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1944 && next == 1945) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1945 && next == 1946) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1946 && next == 1947) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1947 && next == 1948) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1948 && next == 1949) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1949 && next == 1950) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1950 && next == 1951) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1951 && next == 1952) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1952 && next == 1953) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1953 && next == 1954) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1954 && next == 1955) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1955 && next == 1956) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1956 && next == 1957) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1957 && next == 1958) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1958 && next == 1959) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1959 && next == 1960) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1960 && next == 1961) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1961 && next == 1962) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1962 && next == 1963) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1963 && next == 1964) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1964 && next == 1965) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1965 && next == 1966) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1929 && back == 1966 && next == 1967) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1967 && next == 1968) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1968 && next == 1969) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1969 && next == 1970) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1970 && next == 1971) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1971 && next == 1972) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1972 && next == 1973) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1973 && next == 1974) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1974 && next == 1975) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1975 && next == 1976) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1976 && next == 1977) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1977 && next == 1978) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1978 && next == 1979) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1979 && next == 1980) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1980 && next == 1981) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1981 && next == 1982) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1982 && next == 1983) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1983 && next == 1984) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1984 && next == 1985) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1985 && next == 1986) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1986 && next == 1987) {
        for (let i = 0; i < 57; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1987 && next == 1988) {
        for (let i = 0; i < 58; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1988 && next == 1989) {
        for (let i = 0; i < 59; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1989 && next == 1990) {
        for (let i = 0; i < 60; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1929 && back == 1990 && next == 1991) {
        for (let i = 0; i < 61; i++) {

            setTimeout(prev, i * 100)

        }
    }

    // = = = = = = = = =  =  1931 = = = = = = = = 

    if (SearchBox.value == 1931 && back == 1927 && next == 1928) {

        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1928 && next == 1929) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1929 && next == 1930) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1931 && next == 1932) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1932 && next == 1933) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1933 && next == 1934) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1934 && next == 1935) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1935 && next == 1936) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1936 && next == 1937) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1937 && next == 1938) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1938 && next == 1939) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1939 && next == 1940) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1931 && back == 1940 && next == 1941) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1941 && next == 1942) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1942 && next == 1943) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1943 && next == 1944) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1944 && next == 1945) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1945 && next == 1946) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1946 && next == 1947) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1947 && next == 1948) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1948 && next == 1949) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1949 && next == 1950) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1950 && next == 1951) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1951 && next == 1952) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1952 && next == 1953) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1953 && next == 1954) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1954 && next == 1955) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1955 && next == 1956) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1956 && next == 1957) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1957 && next == 1958) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1958 && next == 1959) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1959 && next == 1960) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1960 && next == 1961) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1961 && next == 1962) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1962 && next == 1963) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1963 && next == 1964) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1964 && next == 1965) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1965 && next == 1966) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1931 && back == 1966 && next == 1967) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1967 && next == 1968) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1968 && next == 1969) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1969 && next == 1970) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1970 && next == 1971) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1971 && next == 1972) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1972 && next == 1973) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1973 && next == 1974) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1974 && next == 1975) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1975 && next == 1976) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1976 && next == 1977) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1977 && next == 1978) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1978 && next == 1979) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1979 && next == 1980) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1980 && next == 1981) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1981 && next == 1982) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1982 && next == 1983) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1983 && next == 1984) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1984 && next == 1985) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1985 && next == 1986) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1986 && next == 1987) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1987 && next == 1988) {
        for (let i = 0; i < 57; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1988 && next == 1989) {
        for (let i = 0; i < 58; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1989 && next == 1990) {
        for (let i = 0; i < 59; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1931 && back == 1990 && next == 1991) {
        for (let i = 0; i < 60; i++) {

            setTimeout(prev, i * 100)

        }
    }
    //  = = = = = = = = = = 1932 = = = = = = = = = = = =

    if (SearchBox.value == 1932 && back == 1927 && next == 1928) {

        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1928 && next == 1929) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1929 && next == 1930) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1931 && next == 1932) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1932 && next == 1933) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1933 && next == 1934) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1934 && next == 1935) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1935 && next == 1936) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1936 && next == 1937) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1937 && next == 1938) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1938 && next == 1939) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1939 && next == 1940) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1932 && back == 1940 && next == 1941) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1941 && next == 1942) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1942 && next == 1943) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1943 && next == 1944) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1944 && next == 1945) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1945 && next == 1946) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1946 && next == 1947) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1947 && next == 1948) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1948 && next == 1949) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1949 && next == 1950) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1950 && next == 1951) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1951 && next == 1952) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1952 && next == 1953) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1953 && next == 1954) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1954 && next == 1955) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1955 && next == 1956) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1956 && next == 1957) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1957 && next == 1958) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1958 && next == 1959) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1959 && next == 1960) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1960 && next == 1961) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1961 && next == 1962) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1962 && next == 1963) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1963 && next == 1964) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1964 && next == 1965) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1965 && next == 1966) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1932 && back == 1966 && next == 1967) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1967 && next == 1968) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1968 && next == 1969) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1969 && next == 1970) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1970 && next == 1971) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1971 && next == 1972) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1972 && next == 1973) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1973 && next == 1974) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1974 && next == 1975) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1975 && next == 1976) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1976 && next == 1977) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1977 && next == 1978) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1978 && next == 1979) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1979 && next == 1980) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1980 && next == 1981) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1981 && next == 1982) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1982 && next == 1983) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1983 && next == 1984) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1984 && next == 1985) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1985 && next == 1986) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1986 && next == 1987) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1987 && next == 1988) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1988 && next == 1989) {
        for (let i = 0; i < 57; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1989 && next == 1990) {
        for (let i = 0; i < 58; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1932 && back == 1990 && next == 1991) {
        for (let i = 0; i < 59; i++) {

            setTimeout(prev, i * 100)

        }
    }

    //= = = = = = = = = = 1936 = = = = = = = = = = = = = = =

    if (SearchBox.value == 1936 && back == 1927 && next == 1928) {

        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1928 && next == 1929) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1929 && next == 1930) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1931 && next == 1932) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1932 && next == 1933) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1933 && next == 1934) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1934 && next == 1935) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1935 && next == 1936) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1936 && next == 1937) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1937 && next == 1938) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1938 && next == 1939) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1939 && next == 1940) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1936 && back == 1940 && next == 1941) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1941 && next == 1942) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1942 && next == 1943) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1943 && next == 1944) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1944 && next == 1945) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1945 && next == 1946) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1946 && next == 1947) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1947 && next == 1948) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1948 && next == 1949) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1949 && next == 1950) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1950 && next == 1951) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1951 && next == 1952) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1952 && next == 1953) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1953 && next == 1954) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1954 && next == 1955) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1955 && next == 1956) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1956 && next == 1957) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1957 && next == 1958) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1958 && next == 1959) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1959 && next == 1960) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1960 && next == 1961) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1961 && next == 1962) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1962 && next == 1963) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1963 && next == 1964) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1964 && next == 1965) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1965 && next == 1966) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1936 && back == 1966 && next == 1967) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1967 && next == 1968) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1968 && next == 1969) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1969 && next == 1970) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1970 && next == 1971) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1971 && next == 1972) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1972 && next == 1973) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1973 && next == 1974) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1974 && next == 1975) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1975 && next == 1976) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1976 && next == 1977) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1977 && next == 1978) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1978 && next == 1979) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1979 && next == 1980) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1980 && next == 1981) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1981 && next == 1982) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1982 && next == 1983) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1983 && next == 1984) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1984 && next == 1985) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1985 && next == 1986) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1986 && next == 1987) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1987 && next == 1988) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1988 && next == 1989) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1989 && next == 1990) {
        for (let i = 0; i < 57; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1936 && back == 1990 && next == 1991) {
        for (let i = 0; i < 58; i++) {

            setTimeout(prev, i * 100)

        }
    }

    //= = = = = = = 1937 = = = = = = = = = = = = = 


    if (SearchBox.value == 1937 && back == 1927 && next == 1928) {

        for (let i = 0; i < 6; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1928 && next == 1929) {
        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1929 && next == 1930) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1930 && next == 1931) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1931 && next == 1932) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1932 && next == 1933) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1933 && next == 1934) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1934 && next == 1935) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1935 && next == 1936) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1936 && next == 1937) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1937 && next == 1938) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1938 && next == 1939) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1939 && next == 1940) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1937 && back == 1940 && next == 1941) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1941 && next == 1942) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1942 && next == 1943) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1943 && next == 1944) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1944 && next == 1945) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1945 && next == 1946) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1946 && next == 1947) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1947 && next == 1948) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1948 && next == 1949) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1949 && next == 1950) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1950 && next == 1951) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1951 && next == 1952) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1952 && next == 1953) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1953 && next == 1954) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1954 && next == 1955) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1955 && next == 1956) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1956 && next == 1957) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1957 && next == 1958) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1958 && next == 1959) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1959 && next == 1960) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1960 && next == 1961) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1961 && next == 1962) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1962 && next == 1963) {
        for (let i = 0; i < 29; i++) {
            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1963 && next == 1964) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1964 && next == 1965) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1965 && next == 1966) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1937 && back == 1966 && next == 1967) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1967 && next == 1968) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1968 && next == 1969) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1969 && next == 1970) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1970 && next == 1971) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1971 && next == 1972) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1972 && next == 1973) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1973 && next == 1974) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1974 && next == 1975) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1975 && next == 1976) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1976 && next == 1977) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1977 && next == 1978) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1978 && next == 1979) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1979 && next == 1980) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1980 && next == 1981) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1981 && next == 1982) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1982 && next == 1983) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1983 && next == 1984) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1984 && next == 1985) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1985 && next == 1986) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1986 && next == 1987) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1987 && next == 1988) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1988 && next == 1989) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1989 && next == 1990) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1937 && back == 1990 && next == 1991) {
        for (let i = 0; i < 57; i++) {

            setTimeout(prev, i * 100)

        }
    }



    //= = = = = = = = = 1938 = = = = = = = = = 

    if (SearchBox.value == 1938 && back == 1927 && next == 1928) {

        for (let i = 0; i < 7; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1928 && next == 1929) {
        for (let i = 0; i < 6; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1929 && next == 1930) {
        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1930 && next == 1931) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1931 && next == 1932) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1932 && next == 1933) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1933 && next == 1934) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1934 && next == 1935) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1935 && next == 1936) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1936 && next == 1937) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1937 && next == 1938) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1938 && next == 1939) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1939 && next == 1940) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1938 && back == 1940 && next == 1941) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1941 && next == 1942) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1942 && next == 1943) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1943 && next == 1944) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1944 && next == 1945) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1945 && next == 1946) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1946 && next == 1947) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1947 && next == 1948) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1948 && next == 1949) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1949 && next == 1950) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1950 && next == 1951) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1951 && next == 1952) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1952 && next == 1953) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1953 && next == 1954) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1954 && next == 1955) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1955 && next == 1956) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1956 && next == 1957) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1957 && next == 1958) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1958 && next == 1959) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1959 && next == 1960) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1960 && next == 1961) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1961 && next == 1962) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1962 && next == 1963) {
        for (let i = 0; i < 28; i++) {
            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1963 && next == 1964) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1964 && next == 1965) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1965 && next == 1966) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1938 && back == 1966 && next == 1967) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1967 && next == 1968) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1968 && next == 1969) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1969 && next == 1970) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1970 && next == 1971) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1971 && next == 1972) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1972 && next == 1973) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1973 && next == 1974) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1974 && next == 1975) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1975 && next == 1976) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1976 && next == 1977) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1977 && next == 1978) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1978 && next == 1979) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1979 && next == 1980) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1980 && next == 1981) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1981 && next == 1982) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1982 && next == 1983) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1983 && next == 1984) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1984 && next == 1985) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1985 && next == 1986) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1986 && next == 1987) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1987 && next == 1988) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1988 && next == 1989) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1989 && next == 1990) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1938 && back == 1990 && next == 1991) {
        for (let i = 0; i < 56; i++) {

            setTimeout(prev, i * 100)

        }
    }

    //= = = = = = = = = 1940 = = = = = = = = = 

    if (SearchBox.value == 1940 && back == 1927 && next == 1928) {

        for (let i = 0; i < 8; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1928 && next == 1929) {
        for (let i = 0; i < 7; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1929 && next == 1930) {
        for (let i = 0; i < 6; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1930 && next == 1931) {
        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1931 && next == 1932) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1932 && next == 1933) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1933 && next == 1934) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1934 && next == 1935) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1935 && next == 1936) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1936 && next == 1937) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1937 && next == 1938) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1938 && next == 1939) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1939 && next == 1940) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1940 && back == 1940 && next == 1941) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1941 && next == 1942) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1942 && next == 1943) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1943 && next == 1944) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1944 && next == 1945) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1945 && next == 1946) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1946 && next == 1947) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1947 && next == 1948) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1948 && next == 1949) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1949 && next == 1950) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1950 && next == 1951) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1951 && next == 1952) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1952 && next == 1953) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1953 && next == 1954) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1954 && next == 1955) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1955 && next == 1956) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1956 && next == 1957) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1957 && next == 1958) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1958 && next == 1959) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1959 && next == 1960) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1960 && next == 1961) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1961 && next == 1962) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1962 && next == 1963) {
        for (let i = 0; i < 27; i++) {
            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1963 && next == 1964) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1964 && next == 1965) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1965 && next == 1966) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1940 && back == 1966 && next == 1967) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1967 && next == 1968) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1968 && next == 1969) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1969 && next == 1970) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1970 && next == 1971) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1971 && next == 1972) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1972 && next == 1973) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1973 && next == 1974) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1974 && next == 1975) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1975 && next == 1976) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1976 && next == 1977) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1977 && next == 1978) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1978 && next == 1979) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1979 && next == 1980) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1980 && next == 1981) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1981 && next == 1982) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1982 && next == 1983) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1983 && next == 1984) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1984 && next == 1985) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1985 && next == 1986) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1986 && next == 1987) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1987 && next == 1988) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1988 && next == 1989) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1989 && next == 1990) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1940 && back == 1990 && next == 1991) {
        for (let i = 0; i < 55; i++) {

            setTimeout(prev, i * 100)

        }
    }







    //= = = = = = = = = 1941 = = = = = = = = = 

    if (SearchBox.value == 1941 && back == 1927 && next == 1928) {

        for (let i = 0; i < 9; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1928 && next == 1929) {
        for (let i = 0; i < 8; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1929 && next == 1930) {
        for (let i = 0; i < 7; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1930 && next == 1931) {
        for (let i = 0; i < 6; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1931 && next == 1932) {
        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1932 && next == 1933) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1933 && next == 1934) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1934 && next == 1935) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1935 && next == 1936) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1936 && next == 1937) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1937 && next == 1938) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1938 && next == 1939) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1939 && next == 1940) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1941 && back == 1940 && next == 1941) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1941 && next == 1942) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1942 && next == 1943) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1943 && next == 1944) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1944 && next == 1945) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1945 && next == 1946) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1946 && next == 1947) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1947 && next == 1948) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1948 && next == 1949) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1949 && next == 1950) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1950 && next == 1951) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1951 && next == 1952) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1952 && next == 1953) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1953 && next == 1954) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1954 && next == 1955) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1955 && next == 1956) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1956 && next == 1957) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1957 && next == 1958) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1958 && next == 1959) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1959 && next == 1960) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1960 && next == 1961) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1961 && next == 1962) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1962 && next == 1963) {
        for (let i = 0; i < 26; i++) {
            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1963 && next == 1964) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1964 && next == 1965) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1965 && next == 1966) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1941 && back == 1966 && next == 1967) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1967 && next == 1968) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1968 && next == 1969) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1969 && next == 1970) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1970 && next == 1971) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1971 && next == 1972) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1972 && next == 1973) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1973 && next == 1974) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1974 && next == 1975) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1975 && next == 1976) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1976 && next == 1977) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1977 && next == 1978) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1978 && next == 1979) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1979 && next == 1980) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1980 && next == 1981) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1981 && next == 1982) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1982 && next == 1983) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1983 && next == 1984) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1984 && next == 1985) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1985 && next == 1986) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1986 && next == 1987) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1987 && next == 1988) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1988 && next == 1989) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1989 && next == 1990) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1941 && back == 1990 && next == 1991) {
        for (let i = 0; i < 54; i++) {

            setTimeout(prev, i * 100)

        }
    }


    //= = = = = = = = = 1945 = = = = = = = = = 

    if (SearchBox.value == 1945 && back == 1927 && next == 1928) {

        for (let i = 0; i < 10; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1928 && next == 1929) {
        for (let i = 0; i < 9; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1929 && next == 1930) {
        for (let i = 0; i < 8; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1930 && next == 1931) {
        for (let i = 0; i < 7; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1931 && next == 1932) {
        for (let i = 0; i < 6; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1932 && next == 1933) {
        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1933 && next == 1934) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1934 && next == 1935) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1935 && next == 1936) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1936 && next == 1937) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1937 && next == 1938) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1938 && next == 1939) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1939 && next == 1940) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1945 && back == 1940 && next == 1941) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1941 && next == 1942) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1942 && next == 1943) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1943 && next == 1944) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1944 && next == 1945) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1945 && next == 1946) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1946 && next == 1947) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1947 && next == 1948) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1948 && next == 1949) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1949 && next == 1950) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1950 && next == 1951) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1951 && next == 1952) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1952 && next == 1953) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1953 && next == 1954) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1954 && next == 1955) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1955 && next == 1956) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1956 && next == 1957) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1957 && next == 1958) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1958 && next == 1959) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1959 && next == 1960) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1960 && next == 1961) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1961 && next == 1962) {
        for (let i = 0; i < 24; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1962 && next == 1963) {
        for (let i = 0; i < 25; i++) {
            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1963 && next == 1964) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1964 && next == 1965) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1965 && next == 1966) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1945 && back == 1966 && next == 1967) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1967 && next == 1968) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1968 && next == 1969) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1969 && next == 1970) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1970 && next == 1971) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1971 && next == 1972) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1972 && next == 1973) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1973 && next == 1974) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1974 && next == 1975) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1975 && next == 1976) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1976 && next == 1977) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1977 && next == 1978) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1978 && next == 1979) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1979 && next == 1980) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1980 && next == 1981) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1981 && next == 1982) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1982 && next == 1983) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1983 && next == 1984) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1984 && next == 1985) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1985 && next == 1986) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1986 && next == 1987) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1987 && next == 1988) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1988 && next == 1989) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1989 && next == 1990) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1945 && back == 1990 && next == 1991) {
        for (let i = 0; i < 53; i++) {

            setTimeout(prev, i * 100)

        }
    }














    //= = = = = = = = = 1947 = = = = = = = = = 

    if (SearchBox.value == 1947 && back == 1927 && next == 1928) {

        for (let i = 0; i < 11; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1928 && next == 1929) {
        for (let i = 0; i < 10; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1929 && next == 1930) {
        for (let i = 0; i < 9; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1930 && next == 1931) {
        for (let i = 0; i < 8; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1931 && next == 1932) {
        for (let i = 0; i < 7; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1932 && next == 1933) {
        for (let i = 0; i < 6; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1933 && next == 1934) {
        for (let i = 0; i < 5; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1934 && next == 1935) {
        for (let i = 0; i < 4; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1935 && next == 1936) {
        for (let i = 0; i < 3; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1936 && next == 1937) {
        for (let i = 0; i < 2; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1937 && next == 1938) {
        for (let i = 0; i < 1; i++) {

            setTimeout(nextfunction, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1938 && next == 1939) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1939 && next == 1940) {
        for (let i = 0; i < 1; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1947 && back == 1940 && next == 1941) {
        for (let i = 0; i < 2; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1941 && next == 1942) {
        for (let i = 0; i < 3; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1942 && next == 1943) {
        for (let i = 0; i < 4; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1943 && next == 1944) {
        for (let i = 0; i < 5; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1944 && next == 1945) {
        for (let i = 0; i < 6; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1945 && next == 1946) {
        for (let i = 0; i < 7; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1946 && next == 1947) {
        for (let i = 0; i < 8; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1947 && next == 1948) {
        for (let i = 0; i < 9; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1948 && next == 1949) {
        for (let i = 0; i < 10; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1949 && next == 1950) {
        for (let i = 0; i < 11; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1950 && next == 1951) {
        for (let i = 0; i < 12; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1951 && next == 1952) {
        for (let i = 0; i < 13; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1952 && next == 1953) {
        for (let i = 0; i < 14; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1953 && next == 1954) {
        for (let i = 0; i < 15; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1954 && next == 1955) {
        for (let i = 0; i < 16; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1955 && next == 1956) {
        for (let i = 0; i < 17; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1956 && next == 1957) {
        for (let i = 0; i < 18; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1957 && next == 1958) {
        for (let i = 0; i < 19; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1958 && next == 1959) {
        for (let i = 0; i < 20; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1959 && next == 1960) {
        for (let i = 0; i < 21; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1960 && next == 1961) {
        for (let i = 0; i < 22; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1961 && next == 1962) {
        for (let i = 0; i < 23; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1962 && next == 1963) {
        for (let i = 0; i < 24; i++) {
            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1963 && next == 1964) {
        for (let i = 0; i < 25; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1964 && next == 1965) {
        for (let i = 0; i < 26; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1965 && next == 1966) {
        for (let i = 0; i < 27; i++) {

            setTimeout(prev, i * 100)

        }
    }

    else if (SearchBox.value == 1947 && back == 1966 && next == 1967) {
        for (let i = 0; i < 28; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1967 && next == 1968) {
        for (let i = 0; i < 29; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1968 && next == 1969) {
        for (let i = 0; i < 30; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1969 && next == 1970) {
        for (let i = 0; i < 31; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1970 && next == 1971) {
        for (let i = 0; i < 32; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1971 && next == 1972) {
        for (let i = 0; i < 33; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1972 && next == 1973) {
        for (let i = 0; i < 34; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1973 && next == 1974) {
        for (let i = 0; i < 35; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1974 && next == 1975) {
        for (let i = 0; i < 36; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1975 && next == 1976) {
        for (let i = 0; i < 37; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1976 && next == 1977) {
        for (let i = 0; i < 38; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1977 && next == 1978) {
        for (let i = 0; i < 39; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1978 && next == 1979) {
        for (let i = 0; i < 40; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1979 && next == 1980) {
        for (let i = 0; i < 41; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1980 && next == 1981) {
        for (let i = 0; i < 42; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1981 && next == 1982) {
        for (let i = 0; i < 43; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1982 && next == 1983) {
        for (let i = 0; i < 44; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1983 && next == 1984) {
        for (let i = 0; i < 45; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1984 && next == 1985) {
        for (let i = 0; i < 46; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1985 && next == 1986) {
        for (let i = 0; i < 47; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1986 && next == 1987) {
        for (let i = 0; i < 48; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1987 && next == 1988) {
        for (let i = 0; i < 49; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1988 && next == 1989) {
        for (let i = 0; i < 50; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1989 && next == 1990) {
        for (let i = 0; i < 51; i++) {

            setTimeout(prev, i * 100)

        }
    }
    else if (SearchBox.value == 1947 && back == 1990 && next == 1991) {
        for (let i = 0; i < 52; i++) {

            setTimeout(prev, i * 100)

        }
    }
})


btnN.addEventListener('click', nextfunction)

function nextfunction() {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide').appendChild(lists[0])
    console.log(next, back);

    //sumar
    back = back + 1

    next = next + 1

    if (next == 1991 && back == 1990) {
        btnN.style.visibility = "hidden"
    }

    if (back > 1927) {
        btnB.style.visibility = "visible"
    }
}


btnB.addEventListener('click', prev)

function prev() {
    let lists = document.querySelectorAll('.item')
    let slide = document.getElementById('slide')
    slide.prepend(lists[lists.length - 1])
    console.log(next, back);

    //restar
    back = back - 1
    next = next - 1

    if (next < 1991 && back < 1990) {
        btnN.style.visibility = "visible"
    }


    console.log(back);

    if (back < 1927) {

        back = 1927

        next = 1928

        slide.appendChild(lists[63])

    }
    if (back <= 1927) {
        btnB.style.visibility = "hidden"
    }

}



/*--------  Temporizador -----------*/



let minutos = 10
let seconds = 0

//lente negro
let lentDarkT = document.getElementById('lentDarkT')


//contenedor del temporizador regresivo
let containerTempo = document.getElementById('containerTempo')

setTimeout(() => {
    cargarSeconds()


    //definimos y ejecutamos los segundos

    function cargarSeconds() {
        let txtSecond


        if (seconds < 0) {
            seconds = 59
        }

        //agregar 0 a los segundos despues de bajar de dos cifras
        if (seconds < 10) {
            txtSecond = `0${seconds}`
        }
        else {
            txtSecond = seconds
        }
        //enviamos los valores a plazmarse
        document.getElementById('seconds').textContent = txtSecond
        seconds--
        cargarMinutos(seconds, txtSecond)
    }

    function cargarMinutos(seconds, txtSecond) {
        let txtsegundos = txtSecond
        let textMinutos

        if (seconds == -1 && minutos !== 0) {
            setTimeout(() => {
                minutos--
            }, 500);
        }
        else if (seconds == -1 && minutos == 0) {
            setTimeout(() => {
                minutos = 00;
            }, 500)
        }
        else if (seconds == 0 && minutos == 0) {
            setTimeout(() => {
                minutos = 00;
                seconds = 00
            }, 500)
        }

        //Mostrar minutos en pantalla
        if (minutos < 10) {
            textMinutos = `0${minutos}`;
        } else {
            textMinutos = minutos;
        }

        document.getElementById('minutes').textContent = textMinutos
        render(minutos, seconds, txtsegundos)

    }

    function render(minutos, seconds, txtsegundos) {
        if (minutos == 0 && seconds == 0) {
            txtsegundos = '00'

            document.getElementById('seconds').textContent = txtsegundos

            setTimeout(() => {
                lentDarkT.classList.toggle('lentDarkT')
                lentDarkT.classList.toggle('lentDarkTexit')

                setTimeout(() => {
                    containerTempo.classList.toggle('none')
                    containerTempo.classList.toggle('containerTempo')
                }, 500);

            }, 100);
            setTimeout(() => {
                window.location.assign('/pages/languageESin.html')
            }, 2000);
        }
    }
    setInterval(cargarSeconds, 1000);
}, 2000);
window.addEventListener('load', () => {
    containerTempo.classList.toggle('none')
    setTimeout(() => {
        containerTempo.classList.toggle('none')
        containerTempo.classList.toggle('containerTempo')

        contIconSearch.classList.toggle('contIconSearch')
        Buscar.classList.toggle('glow-on-hoverB')
        volver.classList.toggle('glow-on-hoverV')
        SearchBox.classList.toggle('SearchBox')
    }, 1200);
})



/* temporizador para detectar innactividad del usuario */

let tiempoInactividad = 100000; // tiempo en milisegundos (5 segundos)
let temporizador;

// Reinicia el temporizador
function reiniciarTemporizador() {
    let zarko = 2000
    clearTimeout(temporizador); // Cancela el temporizador anterior
    temporizador = setTimeout(function () {

        // Ejecuta tu función aquí

        lentDarkT.classList.toggle('lentDarkT')
        lentDarkT.classList.toggle('lentDarkTexit')

        containerTempo.classList.toggle('none')
        containerTempo.classList.toggle('containerTempo')

        volver.classList.toggle('glow-on-hoverV')
        Buscar.classList.toggle('glow-on-hoverB')
        contIconSearch.classList.toggle('contIconSearch')
        SearchBox.classList.toggle('SearchBox')
        setTimeout(() => {
            window.location.assign('/pages/languageESin.html')
        }, zarko);

    }, tiempoInactividad);
}

// Agrega eventos para detectar la actividad del usuario
document.addEventListener("mousemove", reiniciarTemporizador);
document.addEventListener("mousedown", reiniciarTemporizador);
document.addEventListener("keydown", reiniciarTemporizador);

// Inicia el temporizador inicial
reiniciarTemporizador();


window.addEventListener('load', () => {

    if (back == 1927) {
        btnB.style.visibility = "hidden"
    }
})