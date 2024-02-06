// 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.

const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅍㅌㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카파타하';

const searchByKoreanInitialSound = (data, initSounds) => {
    // [...is].map()
    // is.replaceAll('ㄱ', '[ㄱ가-깋]').replaceAll('ㄴ', '[ㄴ나-닣]');
    const regexps = [...initSounds].map(c => {
        const idx = ㄱㄴㄷ.indexOf(is);
        if (idx === -1) return is;
        const S = 가나다.at();
        const endCode = 가나다.at(idx + 1).charCodeAt(0) - 1;
        const E = String.fromCharCode(endCode - 1);

        // @Todo ㅎ 처리!
        return `[${c}${S}-${E}]`
    });

    const regex = new RegExp(regexps.join(''));
    return data.filter(d => regex.test(d));
};

assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅇ'), ['강원도 고성군']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'), ['강원도 고성군', '고성군 토성면']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'), ['고성군 토성면', '토성면 북면']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅂㅁ'), ['토성면 북면', '북면']);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅍㅁ'), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);